import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpense = ({onAddExpense}) => {
const saveExpenseDatahandler = (enteredExpenseData)=>{
  const expenseData = {
    ...enteredExpenseData
  }
  onAddExpense(expenseData);
}
  return (
    <div className='new-expense '>  
    <ExpenseForm onSaveExpenseData = {saveExpenseDatahandler}/>    
    </div>
  )
}

export default NewExpense
