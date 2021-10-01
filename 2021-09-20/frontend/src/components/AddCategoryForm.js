import './AddCategoryForm.css';
import { useRef } from 'react';

function AddCategoryForm(props) {
  const nameInputRef = useRef();
  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    
    const category = {
      name: nameValue,
    }
    props.onAddItem(category);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Kategooria nimi</label><br />
      <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
      <button>Sisesta uus kategooria</button>
    </form>
  );
}

export default AddCategoryForm;