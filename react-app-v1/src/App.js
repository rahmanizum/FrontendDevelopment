import React from 'react';
import Expenses from "./components/Expenses";
import './App.css'

function App() {
  const expenses = [
    {id:1,date : new Date(2023,2,23),title:"Salary",amount:350,},
    {id:2,date:new Date(2023,10,17),title:"Food",amount:100},
    {id:3,date:new Date(),title:"Books",amount:587}

  ]
  // return (
  //   <div>
  //     <div className="text-center">
  //     <h1>Lets Manage your Money!</h1>
  //     </div>
  //     <Expenses expenses = {expenses}/>
  //   </div>
  // );
  return React.createElement(
    'div',
    {},
    React.createElement('h2',{},'Lets manage your Money!'),
    React.createElement(Expenses,{expenses:expenses})
  );
}

export default App;
