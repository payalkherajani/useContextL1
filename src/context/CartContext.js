import { createContext, useState } from 'react';


export const CartContext = createContext();
// { id: 1, user: 'Harry Potter' } if no provider than default value is executed

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}




