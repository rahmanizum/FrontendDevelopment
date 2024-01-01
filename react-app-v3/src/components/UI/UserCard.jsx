import React from 'react'

const UserCard = ({children}) => {
  return (
    <div className='bg-success border border-2 p3 m-5 rounded-3'>
      {children}
    </div>
  )
}

export default UserCard
