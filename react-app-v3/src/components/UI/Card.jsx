import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-black text-white border border-2 p3 m-4 rounded-3'>
      {children}
    </div>
  )
}

export default Card 
