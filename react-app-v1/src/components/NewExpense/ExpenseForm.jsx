import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  return (
    <form >
        <div className='new-expense__controls'>
        <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="" />
        </div>
        <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="" min={0}/>
        </div>
        <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="" min="2023-01-01" max="2024-12-31"/>
        </div>
        </div>
        <div className=''>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
