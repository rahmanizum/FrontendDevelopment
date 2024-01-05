import React from 'react'

const Select = ({ options, value, onChange}) => {
  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
