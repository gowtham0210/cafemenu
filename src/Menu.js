import React from 'react';
import photo from './images/item-1.jpeg';

function Menu() {
  return (
    <div className='section-center'>
      <article>
        <img src={photo} alt ="" className='photo' />
        <div className='item-info'>
            <header>
                <h4>Dish Title</h4>
                <h4>₹ 100</h4>
            </header>
            <p className=''>This is a very good dish</p>
        </div>
      </article>
    </div>
  )
}

export default Menu