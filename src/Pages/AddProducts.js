import React from "react";
import AddProductForm from "./AddProductForm";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/reducers";

const AddProducts = () => {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <AddProductForm onSubmit={handleAddProduct} />
    </div>
  );
};
export default AddProducts;