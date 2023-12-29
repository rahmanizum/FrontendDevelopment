import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'

const ExpenseItem = ({date,title,amount}) => {
  return (
    <Card className='expense-item '>
      <ExpenseDate date={date}/>
      <ExpenseDetails title={title} amount={amount} />      
    </Card>
  )
}

export default ExpenseItem

