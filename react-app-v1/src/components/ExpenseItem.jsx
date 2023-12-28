import React from 'react'
import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className='expense-item '>
        <div>Jan 12th 2024</div>
        <div className='expense-item__description'>
            <h2>Food</h2>
            <div className='expense-item__price'>$ 258</div>
        </div>
      
    </div>
  )
}

export default ExpenseItem
