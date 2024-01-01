import React from "react";
import Form from "./components/Form/Form";
import Card from "./components/UI/Card";
import Users from "./components/List/Users";
import User from "./components/List/User";
import UserCard from "./components/UI/UserCard";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  return (
    <div>
      <Card>
        <Form />
      </Card>
      <UserCard>
        <Users>
          <User />
        </Users>
      </UserCard>
    </div>
  );
};

export default App;
