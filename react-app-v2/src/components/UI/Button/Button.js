import React from "react";
import style from './Button.module.css'

const Button = ({type,children}) => {
  return (
    <button type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
