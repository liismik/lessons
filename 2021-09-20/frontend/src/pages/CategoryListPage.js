import CategoryList from '../components/CategoryList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CategoryListPage() {
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
      <div>
        <h1>Kategooriad:</h1>
        <br />
        <CategoryList category={loadedItems} />
      <Link to="add-category">
        <button>Lisa uus kategooria</button>
      </Link>
      </div>
    );
}
export default CategoryListPage;