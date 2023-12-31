import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense ">
      {!isEditing && (<button onClick={startEditingHandler}>Add New Expenses </button>)}
      {isEditing && (<ExpenseForm onClickCancel={startEditingHandler} onSaveExpenseData={saveExpenseDatahandler}/>)}
    </div>
  );
};

export default NewExpense;
