import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './Expenses.css'

function Expenses({expenses}) {
  return (
    <Card  className='expenses'>
        {expenses.map((ele)=>{
            return <ExpenseItem key={ele.id} {...ele}/>
        })}
    </Card >
  )
}

export default Expenses
