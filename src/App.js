import Category from './Category';
import './App.css';
import Menu from './Menu';
import items from './data';
const allcategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>
            <u>our menu</u>
          </h2>
        </div>
        <div className='underline'>
        <Category />
        </div>
        <div>
          <Menu />
        </div>

      </section>
    </main>
  );
}

export default App;
