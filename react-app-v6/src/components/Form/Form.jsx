import React, { useState} from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Label from "../UI/Label/Label";
import Select from "../UI/Select/Select";
import FormControl from '@mui/joy/FormControl';
const Form = ({ onSubmit }) => {
  const options = ["Electronics", "Food", "SkinCare"];
  const [inputProductId,setInputProductId]= useState('')
  const [inputSellingprice,setInputSellingprice  ]= useState('')
  const [inputProductName,setInputProductName] = useState('')
  const [inputProductCategory,setInputProductCategory] =useState('Electronics')

  const productIdChangeHandler = (e) => {
    let value = e.target.value
    setInputProductId(value);
  };
  const sellingPriceChangehandler = (e) => {
    let value = e.target.value
    setInputSellingprice(value);
  };
  const productNameChangeHandler = (e) => {
    let value = e.target.value
    setInputProductName(value);
  };
  const categoryChangeHandler = (e) => {
    let value = e.target.value
    setInputProductCategory(value)
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({
      id: inputProductId,
      name: inputProductName,
      price: inputSellingprice,
      category: inputProductCategory,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
      <Label htmlFor="product_ID"> Product Id:</Label>
      <Input
        id="product_id"
        type="number"
        value={inputProductId}
        onChange={productIdChangeHandler}
      />
      </FormControl>
      <Label htmlFor="Selling_Price"> Selling Price:</Label>
      <Input
        id="selling_price"
        type="number"
        value={inputSellingprice}
        onChange={sellingPriceChangehandler}
      />
      <Label htmlFor="Product_Name"> Product Name:</Label>
      <Input
        id="product_name"
        type="text"
        value = {inputProductName}
        onChange={productNameChangeHandler}
      />
      <Label htmlFor="category"> Choose a Category:</Label>
      <Select
        options={options}
        value = {inputProductCategory}
        onChange={categoryChangeHandler}
      />
      <Button type="submit" className="btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
