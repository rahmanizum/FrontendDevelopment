import ExpenseItem  from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id:1,date : "21 st Jan 2024",title:"Salary",amount:350,
    },
    {id:2,date:"25th Feb 2024",title:"Food",amount:100},
    {id:3,date:"31st March 2024",title:"Books",amount:587}

  ]
  return (
    <div>
      <div className="text-center">
      <h1>Hello World!</h1>
      </div>
      {expense.map((ele)=>{
        return <ExpenseItem key={ele.id} {...ele}/>;
      })}
    </div>
  );
}

export default App;
