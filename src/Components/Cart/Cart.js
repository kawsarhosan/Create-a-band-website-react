import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyCheckAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import CartItem from '../CartItem/CartItem';

import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total =0;
    for(const singer of cart){
        total = total + singer.budget;
    }
    // console.log(props.cart);
    const element = <FontAwesomeIcon className='icon' icon={faUser} />
    const sign = <FontAwesomeIcon className='icon' icon={faMoneyCheckAlt} />
    return (
        <div className='cart-section'>
            <h4>{element}Singer Added: {props.cart.length}</h4>
            <hr />
            <h4>{sign}Total Cost: $ {total}</h4><hr />
           
            <div>
                {props.cart.map((item, index) => <CartItem 
                // key={item.name}
                item={item}
                key={index}
                ></CartItem>)}
            </div>
        </div>
    );
};

export default Cart;