import React from 'react';
import './Card.css'

const Card = (props) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of props.cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    let tax = (total * 0.1).toFixed(2)
    let GrandTotal = total+shipping+parseFloat(tax)
    return (
        <div className='Cart'>
            <h2>summary container</h2>
            <p>Select Items: {quantity}</p>
            <p>Total price ${total}</p>
            <p>Shipping Price $ {shipping}</p>
            <p>Tax ${tax}</p>
            <h3>Grand Total ${GrandTotal}</h3>
        </div>
    );
};

export default Card;