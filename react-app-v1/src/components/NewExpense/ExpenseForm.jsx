import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData}) => {
  const [eneteredTitle, setEneteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEneteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      date: new Date(eneteredDate),
      title: eneteredTitle,
      amount: enteredAmount,
    };
    setEneteredTitle("");
    setEnteredAmount("");
    setEneteredTitle("");
    onSaveExpenseData(expense)
    e.target.reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            name="title"
            id=""
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            name="amount"
            id=""
            min={0}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            name="date"
            id=""
            min="2022-01-01"
            max="2025-12-31"
            required
          />
        </div>
      </div>
      <div className="">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
