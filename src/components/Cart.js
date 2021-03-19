import React from 'react';
import useCart from '../customHook/useCart';

const Cart = (props) => {
    const { cartItems } = useCart();
    const { back } = props;

    return (
        <div>
            <button onClick={() => back(0)}>Back To Product Listing</button>
            <h1> Items in Cart!{cartItems.length}</h1>
            <ul>
                {
                    cartItems.map((item) => (
                        <div key={Math.random()}>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Cart;