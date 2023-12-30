import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
    if(items.length === 0 ) {
        return <h2 className="expenses-list__fallback">No expenses yet</h2>;
    }
  return (
    <ul className="expenses-list">
      {items.map((ele) => {
        return <ExpenseItem key={ele.id} {...ele} />;
      })}
    </ul>
  );
};

export default ExpensesList;
