import CategoryList from '../components/CategoryList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CategoryListPage.css';

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
      <div className="categoryListPage">
        <h1 className="title">Kategooriad:</h1>
        <br />
        <CategoryList category={loadedItems} />
      <Link to="add-category">
        <button className="addCategoryButton">Lisa uus kategooria</button>
      </Link>
      </div>
    );
}
export default CategoryListPage;