import React from "react";

const Button = ({children}) => {
  return (
    <div className="button-group text-center mt-2 mb-2">
      <button type="button" className="btn btn-primary">
        {children}
      </button>
    </div>
  );
};

export default Button;
