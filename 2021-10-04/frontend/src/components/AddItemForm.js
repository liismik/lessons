import './AddItemForm.css';
import { useRef, useState, useEffect } from 'react';

function AddItemForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();
    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;
        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        props.onAddItem(item);
    }
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    },[])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
            <label>Eseme hind</label><br />
            <input type="number" required ref={priceInputRef} /><br />
            <label>Eseme kategooria</label><br />
            <select required ref={categoryInputRef}>
                {loadedItems.map(item => <option value={item.name}>{item.name}</option> )}
            </select><br />
            <button className="addNewButton">Sisesta uus ese</button>
        </form>
    );
}

export default AddItemForm;