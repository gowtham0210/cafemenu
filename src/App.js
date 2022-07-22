import React, {useState} from 'react'
import Category from './Category';
import './App.css';
import Menu from './Menu';
import menu from './data';
const allcategories = ['all', ...new Set(menu.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [Categories, setCategories] = useState(allcategories);

  const filterItems = (category) => {
    if(category === "all"){
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
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
