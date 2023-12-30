import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

const App = () => {
  const dummyData = [
    {id:1,date : new Date(2024,2,23),title:"Salary",amount:350,},
    {id:2,date:new Date(2023,10,17),title:"Food",amount:200},
    {id:3,date:new Date(),title:"Books",amount:587}

  ]
  const [expenses,setData] = useState(dummyData)
  const addExpenseHandler = (expense)=>{
    setData(()=>[expense,...expenses])
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App

