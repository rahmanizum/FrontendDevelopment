import React from "react";
import { Button as Joybutton } from "@mui/joy";
const Button = ({ type, className, onClick, children }) => {
  return (
    <Joybutton variant="solid" type={type} onClick={onClick}>
      {children}
    </Joybutton>
  );
};

export default Button;
