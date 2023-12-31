import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = ({ onAddExpense }) => {
  const [button, setButton] = useState(true);
  const onClickButton = () => {
    setButton(!button);
  };
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };

  let formContent = button ? (
    <button className="" onClick={onClickButton}>
      Add new Expenses
    </button>
  ) : (
    <ExpenseForm onClickCancel = {onClickButton} onSaveExpenseData={saveExpenseDatahandler} />
  );
  return (
    <div className="new-expense ">
      {formContent}
    </div>
  );
};

export default NewExpense;
