import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct } from '../redux/reducers';
import { updateProduct } from '../redux/reducers';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleUpdateProduct = (product) => {
    const updatedProduct = { ...product, price: product.price + 1 }; // Update the price by 1 for demonstration purposes
    dispatch(updateProduct(updatedProduct));
  };
  

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Photo</th>
          <th>Rating</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td><img src={product.photo} alt="Imagename"/></td>
            <td>{product.rating}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
            <td>
              <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
              <Link to={`/update/${product.id}`}><button>Update</button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
