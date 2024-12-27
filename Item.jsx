import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      {/* Link to product detail page */}
      <Link to={`/product/${props.id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} // Fixing the onClick handler
          src={props.image} 
          alt={props.name || 'Product Image'} // Adding meaningful alt text
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Rs {props.new_price}
        </div>
        <div className="item-price-old">
          Rs {props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
