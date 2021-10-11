import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className='cart-item'>
            <img className='img' src={props.item.img} alt="" />
            <h4>{props.item.name}</h4>
        </div>
    );
};

export default CartItem;