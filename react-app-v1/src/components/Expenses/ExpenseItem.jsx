import React, {useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = ({date,title,amount}) => {
  const [data,setData] = useState(title)
  const clickHandler = ()=>{
    setData("Updated")
  }
  return (
    <Card className='expense-item '>
      <ExpenseDate date={date}/>
        <div className='expense-item__description'>
            <h2>{data}</h2>
            <div className='expense-item__price'>$ {amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem

