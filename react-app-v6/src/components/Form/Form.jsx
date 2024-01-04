import React, { useRef, useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Label from "../UI/Label/Label";
import Select from "../UI/Select/Select";

const Form = ({ onSubmit }) => {
  const options = ["Electronics", "Food", "SkinCare"];
  const productIdRef = useRef();
  const sellingpriceRef = useRef();
  const productNameRef = useRef();
  const [productCategory, setProductCategory] = useState("");
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");

  const productIdChangeHandler = () => {
    let value = productIdRef.current.value;
    console.log(productIdRef);
    setProductId(value);
  };
  const sellingPriceChangehandler = () => {
    let value = sellingpriceRef.current.value;
    setSellingPrice(value);
  };
  const productNameChangeHandler = () => {
    let value = productNameRef.current.value;
    setProductName(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({
      id: productId,
      name: productName,
      price: sellingPrice,
      category: productCategory,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <Label htmlFor="product_ID"> Product Id:</Label>
      <Input
        ref={productIdRef}
        id="product_id"
        type="number"
        onChange={productIdChangeHandler}
      />
      <Label htmlFor="Selling_Price"> Selling Price:</Label>
      <Input
        ref={sellingpriceRef}
        id="selling_price"
        type="number"
        onChange={sellingPriceChangehandler}
      />
      <Label htmlFor="Product_Name"> Product Name:</Label>
      <Input
        ref={productIdRef}
        id="product_name"
        type="text"
        value = ""
        onChange={productNameChangeHandler}
      />
      <Label htmlFor="category"> Choose a Category:</Label>
      <Select
        options={options}
        onSelect={(value) => setProductCategory(value)}
      />
      <Button type="submit" className="btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
