import React from 'react'

const Items = ({products}) => {
  return (
    <ul>
    {products.map((product) => (
      <li key={product.id}>
        {`Product Name : ${product.name} Price : ${product.price}`}
      </li>
    ))}
  </ul>
  )
}

export default Items
