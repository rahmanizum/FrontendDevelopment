import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [eneteredTitle,setEneteredTitle] = useState("")
    const titleChangeHandler = (e)=>{
        setEneteredTitle(e.target.value)
    }
    const [enteredAmount, setEnteredAmount]=useState('')
    const amountChangeHandler= (e)=> {
        setEnteredAmount(e.target.value)
        }
    const [eneteredDate,setEnteredDate] = useState("");
    const dateChangeHandler=(e)=> {
        console.log(e.target.value);
        setEnteredDate(e.target.value)
        };
  return (
    <form >
        <div className='new-expense__controls'>
        <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input onChange={titleChangeHandler} type="text" name="title" id="" />
        </div>
        <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input onChange={amountChangeHandler} type="number" name="amount" id="" min={0}/>
        </div>
        <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input onChange={dateChangeHandler} type="date" name="date" id="" min="2023-01-01" max="2024-12-31"/>
        </div>
        </div>
        <div className=''>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
