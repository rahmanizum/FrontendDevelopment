import React,{useState} from "react";
import Form from "./components/Form/Form";
import Card from "./components/UI/Card";
import Users from "./components/List/Users";
import User from "./components/List/User";
import UserCard from "./components/UI/UserCard";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const dummy = [{
    id:"user1",
    name : "Mufil Rahman",
    age:"23"
  }]
 const [users,SetUsers] = useState(dummy);
 const formHandler = (user)=>{
  SetUsers([...users, user])
 }
  return (
    <div>
      <Card>
        <Form onSubmit = {formHandler}/>
      </Card>
      <UserCard>
        <Users>
          {users.map((ele)=>{
            return <User key={ele.id} {...ele}/>;
          })}
        </Users>
      </UserCard>

    </div>
  );
};

export default App;
