import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";



function App() {
  const dummy = [
    // { id: "1", name: "Product 1", price: 55, category: "Electronics" },
    // {id: "2",name: "Product 1",price: 55,category: "Food"},
    // {id: "3",name: "Product 1",price: 55,category: "SkinCare"},
  ];
  const [products, setProducts] = useState(dummy);
  const onSubmit = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  useEffect(
    () => {
      console.log("I am first");
      if (localStorage.getItem("products").length > 0) {
        setProducts(JSON.parse(localStorage.getItem("products")));
      }
    }, // eslint-disable-next-line
    []
  );
  useEffect(() => {
    console.log("I am second");
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return (
    <div>
      <h1>Ecommmerce Admin Page</h1>
      <Form onSubmit={onSubmit}></Form>
      <h2>Electronic</h2>
      <div>
        <Items
          products={products.filter((ele) => ele.category === "Electronics")}
        />
      </div>
      <h2>Food</h2>
      <Items products={products.filter((ele) => ele.category === "Food")} />
      <h2>SkinCare</h2>
      <Items products={products.filter((ele) => ele.category === "SkinCare")} />
    </div>
  );
}

export default App;
