import { useState } from "react";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";

function App() {

  const dummy= [{
    id: '1', name: 'Product 1',price:55
  },{
    id: '2', name: 'Product 1',price:55
  },{
    id: '3', name: 'Product 1',price:55
  }]
  const [products,setProducts] = useState(dummy)
  const onSubmit = (newProduct)=>{
    console.log('Submitted')
    setProducts([...products,newProduct])
  }
  return (
    <div>
      <h1 >Ecommmerce Admin Page</h1>
      <Form onSubmit={onSubmit}></Form>
      <h2>Electronic</h2>
      <div>
        <Items products={products}/>
      </div>
      <h2>Food</h2>
      
      <h2>SkinCare</h2>
    </div>
  );
}

export default App;
