import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css'


const Product = (props) => {
    const {addToCart,product} = props;
    const {name,img,seller,ratings,price}=product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p> 
                <p>price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Rating : {ratings} stars</small></p>
            </div>
            <button className='bth-cart' onClick={()=> addToCart(product)}>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;