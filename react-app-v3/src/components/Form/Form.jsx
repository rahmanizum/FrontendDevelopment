import React, { useState } from "react";
import Button from "./Button";
const Form = ({ onSubmit }) => {
  const [currentName, setCurrentName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const handleInputName = (e) => {
    setCurrentName(e.target.value);
  };
  const handleInputAge = (e) => {
    setCurrentAge(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id:Math.random(), name: currentName, age: currentAge });
    setCurrentName("");
    setCurrentAge("");
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={currentName}
            onChange={handleInputName}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={currentAge}
            onChange={handleInputAge}
            placeholder="Enter your age"
          />
        </div>
        <Button type="submit"> Add User </Button>
      </form>
    </div>
  );
};

export default Form;
