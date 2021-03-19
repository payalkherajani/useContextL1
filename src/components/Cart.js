import React from 'react';
import useCart from '../customHook/useCart';


const Cart = () => {
    const { cartItems, setCartItems } = useCart();

    return (
        <div>
            Items in Cart!{cartItems}
        </div>
    )
}

export default Cart;