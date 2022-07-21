import React, {useState} from 'react'
import Category from './Category';
import './App.css';
import Menu from './Menu';
import items from './data';
const allcategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [Categories, setCategories] = useState(allcategories);

  const filterItems = (category) => {
    if(category === "all"){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>
            <u>our menu</u>
          </h2>
          <div className='underline'>
        </div>
        <Category Categories={Categories} filterItems={filterItems}/>
         <Menu items={menuItems} /> 
        </div>




      </section>
    </main>
  );
}

export default App;
