import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCart = (product) =>{
        console.log(product)
        let newCart = [...cart, product]
        setCart(newCart);

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =><Product 
                        key={product.id} 
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="summary-container">
                <h2>summary container</h2>
                <p>Select Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;