import React from 'react';
import { useLocation } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const location = useLocation();
  const { items } = location.state || { items: [] };

  return (
    <div className="category-container">
      {items.map(item => (
        <div key={item.id} className="category-item">
          <h1>{item.category}</h1>
          <img src={item.img} alt={item.name} />
          <h1>{item.name}</h1>
          <p className="price">₹{item.price}</p>
          <div className="button-container">
            <button className="button cart-btn">Add to Cart</button>
            <button className="button order-btn">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
