import React, { useState } from "react";
import Form from "./components/Form/Form";
import Card from "./components/UI/Card";
import Users from "./components/List/Users";
import User from "./components/List/User";
import UserCard from "./components/UI/UserCard";
import ErrorModel from "./components/UI/ErrorModel";
import { Modal } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

const App = () => {
  const dummy = [
    {
      id: "user1",
      name: "Mufil Rahman",
      age: "23",
    },
  ];
  const [users, SetUsers] = useState(dummy);
  const formHandler = (user) => {
    if (user.name.trim().length === 0) {
      const mod = new Modal(document.getElementById("errorModal"));
      mod.show();
      return 
    }
    SetUsers([...users, user]);
  };
  return (
    <div>
      <Card>
        <Form onSubmit={formHandler} />
      </Card>
      <UserCard>
        <Users>
          {users.map((ele) => {
            return <User key={ele.id} {...ele} />;
          })}
        </Users>
      </UserCard>
      <ErrorModel />
    </div>
  );
};

export default App;
