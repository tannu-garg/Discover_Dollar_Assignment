// ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>rupee  {product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
