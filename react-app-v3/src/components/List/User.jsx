import React from 'react'

const User = ({name,age}) => {
  return (
    <div className='list-group-item'>
      <h3 className='Lead'> {`${name} - ${age}`}</h3>
    </div>
  )
}

export default User
