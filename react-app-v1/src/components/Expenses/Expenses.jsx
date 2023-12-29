import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = ({expenses,dataState}) => {
  return (
    <Card  className='expenses'>
        {expenses.map((ele)=>{
            return <ExpenseItem dataState={dataState} key={ele.id} {...ele}/>
        })}
    </Card >
  )
}

export default Expenses

