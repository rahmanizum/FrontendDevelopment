import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import './App.css'

const App = () => {
  const expenses = [
    {id:1,date : new Date(2023,2,23),title:"Salary",amount:350,},
    {id:2,date:new Date(2023,10,17),title:"Food",amount:100},
    {id:3,date:new Date(),title:"Books",amount:587}

  ]
  return (
    <div>
      <div className="text-center">
      <h1>Lets Manage your Money!</h1>
      </div>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App

