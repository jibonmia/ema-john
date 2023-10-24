import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Card from '../Card/Card';
import { addToDb, getStrodData } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart)
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const alreadyStrodData = getStrodData();
        let saveCart = [];
        for (const id in alreadyStrodData) {
            const addedData = products.find( product => product.id === id)
            if(addedData){
                const quantity = alreadyStrodData[id];
                addedData.quantity = quantity;
                saveCart.push(addedData)
            }
        }
        setCart(saveCart)
    },[products])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    };
    
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