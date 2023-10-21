import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Card from '../../Card/Card';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCart = (product) =>{
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
               <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;