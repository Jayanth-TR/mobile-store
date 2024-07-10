import React from 'react';
import { useNavigate } from 'react-router-dom';
import productData from './ProductData';
import './Product.css';

const Products = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const selectedCategory = productData.find(item => item.category === product.category);
    if (selectedCategory) {
      navigate(`/category/${product.category}`, { state: { items: selectedCategory.items } });
    }
  };

  return (
    <div className='product-container'>
      <div className='product-card' onClick={handleClick}>
        
        <img src={product.img} alt='item' />
        <div>{product.name}</div>
      </div>
    </div>
  );
};

export default Products;
