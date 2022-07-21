import React from 'react';
import photo from './images/item-1.jpeg';
import menu from './data';

function Menu({items}) {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {id, title, img, desc, price} = menuItem;

        return(
          <article key="id" className="menu-item">
        <img src={img} alt ="photo" className='photo' />
        <div className='item-info'>
            <header>
                <h4>{title}</h4>
                <h4 class="price">₹{Math.floot(price*10)}</h4>
            </header>
            <p className="item-text">{desc}</p>
        </div>
      </article>
        )
      })
      }
    </div>
  )
}

export default Menu