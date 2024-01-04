import React from 'react'

const Input = ({id,type,value,onChange}) => {
  return (
    <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
  />
  )
}

export default Input
