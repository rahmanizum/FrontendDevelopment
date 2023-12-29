import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

const App = () => {
  const expenses = [
    {date : new Date(2023,2,23),title:"Salary",amount:350,},
    {date:new Date(2023,10,17),title:"Food",amount:100},
    {date:new Date(),title:"Books",amount:587}

  ]
  return (
    <div>
      <NewExpense />
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App

