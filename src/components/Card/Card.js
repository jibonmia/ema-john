import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props.cart);
    let total = 0;
    let shipping = 0;

    for(const product of props.cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    let tax = (total * 0.1).toFixed(2)
    return (
        <div className='Cart'>
            <h2>summary container</h2>
            <p>Select Items: {props.cart.length}</p>
            <p>Total price ${total}</p>
            <p>Shipping Price $ {shipping}</p>
            <p>Tax ${tax}</p>
            <h3>Grand Total $</h3>
        </div>
    );
};

export default Card;