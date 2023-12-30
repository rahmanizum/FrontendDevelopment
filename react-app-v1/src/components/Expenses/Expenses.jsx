import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
