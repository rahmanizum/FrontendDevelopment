import ExpenseItem  from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id:1,date : new Date(),title:"Salary",amount:350,
    },
    {id:2,date:new Date(),title:"Food",amount:100},
    {id:3,date:new Date(),title:"Books",amount:587}

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
