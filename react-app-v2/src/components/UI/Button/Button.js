import React from "react";
import style from './Button.module.css'

const Button = ({isValid,type,children}) => {
  return (
    <button type={type} className={`${style.button} ${!isValid && style.inValid}`}>
      {children}
    </button>
  );
};
//`${style.button} ${style.inValid}`
export default Button;
