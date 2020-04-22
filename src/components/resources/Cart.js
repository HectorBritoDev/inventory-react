import React from 'react';
import '../css/Cart.css';

const Cart = props => {
    const { title, quantity, measure, description } = props;
    return (
        <div className="cart">
            <div className="cart-body">
                <div className="cart-title">{title}</div>
                <div className="cart-content">
                    <div className="cart-content__quantity">{quantity}</div>
                    <div className="cart-content__measure">{measure}</div>
                    <div className="cart-content__description">{description}</div>
                </div>
            </div>

        </div>
    );

}

export default Cart;