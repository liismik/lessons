import AddCategoryForm from '../components/AddCategoryForm'
import './AddCategory.css';

function AddCategory() {
  function categorySubmitHandler(category) {
    fetch('http://localhost:8080/categories',{
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  return (
    <div className="addCategoryDiv">
      <h1 className="title">Lisa uus kategooria</h1>
      <AddCategoryForm onAddItem={categorySubmitHandler}/>
    </div>
    );
}

export default AddCategory;