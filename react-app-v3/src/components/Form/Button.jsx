import React from "react";

const Button = ({ type, children }) => {
  return (
    <div className="button-group text-center mt-2 mb-2">
      <button type={type} className="btn btn-primary">
        {children}
      </button>
    </div>
  );
};

export default Button;
