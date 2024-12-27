import React, { useContext } from 'react'
import './ProductDisplay.css'

import star_icon from "../Assets/star_icon.png";
import star_dull_icon from '../Assets/star_dull.jpeg';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img  className='productdisplay-main-img' src={product.image} alt=""/>
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
           

Discover the perfect blend of comfort, style, and durability in our kids' clothing collection! Designed with little ones in mind, our range features vibrant colors, playful patterns, and premium-quality fabrics to keep kids looking adorable while feeling their best. Whether it's casual wear for everyday adventures, cozy outfits for lounging, or elegant attire for special occasions, we have it all. Each piece is thoughtfully crafted to withstand the energy and enthusiasm of active kids, ensuring long-lasting wear. Explore our collection and find the ideal outfit for every child and every moment


            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Girls, I-shirt, Crop-Top</p>
            <p className='productdisplay-right-category'><span>Tags</span>Modern, Latest</p>

        </div>
      
    </div>
  )
}

export default ProductDisplay
