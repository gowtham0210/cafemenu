import React from 'react'

function Category({Categories,filterItems}) {
  return (
    <div className='btn-container'>
      {Categories.map((Category,index) =>{
        return (
        <button 
        type="button" 
        key={index} 
        onClick={() => filterItems(Category,)} 
        className='filter-btn'>
          {Category}
          
          </button>
        
        )
      })}
        

    </div>
  )
}

export default Category