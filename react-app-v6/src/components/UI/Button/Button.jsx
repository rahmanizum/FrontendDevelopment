import React from 'react'

const Button = ({type,className,onClick,children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
