import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = ({onAddGoal}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid] = useState(true)

  const goalInputChangeHandler = (e) => {
    if(e.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length ===0) {
      setIsValid(false)
      return
    }
    onAddGoal(enteredValue);
    setEnteredValue("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color : isValid ? 'black' : 'red'}}>Course Goal</label>
        <input style={{borderColor : isValid ? 'black ':'red',backgroundColor : isValid ? 'transparent ':'salmon'}} type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
