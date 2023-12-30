import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

const App = () => {
  const expenses = [
    {date : new Date(2023,2,23),title:"Salary",amount:350,},
    {date:new Date(2023,10,17),title:"Food",amount:100},
    {date:new Date(),title:"Books",amount:587}

  ]
  const [data,setData] = useState(expenses)
  const addExpenseHandler = (expense)=>{
    console.log('Adding new expense',expense);
    setData(()=>[...data,expense])
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses = {data}/>
    </div>
  );
}

export default App

