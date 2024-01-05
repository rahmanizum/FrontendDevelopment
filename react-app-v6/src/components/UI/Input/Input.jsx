import React from 'react'
import {Input as JoyInput }from '@mui/joy';

const Input = ({id,type,value,onChange}) => {
  return (
    <JoyInput
    id={id}
    type={type}
    value={value}
    onChange={onChange}

  />
  )
}

export default Input
