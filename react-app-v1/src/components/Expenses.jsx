import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses({expenses}) {
  return (
    <div className='expenses'>
        {expenses.map((ele)=>{
            return <ExpenseItem key={ele.id} {...ele}/>
        })}
    </div>
  )
}

export default Expenses
