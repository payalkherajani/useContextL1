import React, { useState } from 'react';
import useCart from '../customHook/useCart';

const ProductListing = () => {

    const [products, setProducts] = useState([
        { id: 1, name: 'Bag', price: 2000 },
        { id: 2, name: 'Bottle', price: 20 },
        { id: 3, name: 'Table', price: 2000 },
        { id: 4, name: 'Chair', price: 2000 }
    ])

    const { setCartItems, cartItems } = useCart();

    const addToCart = (name, id, price) => {
        setCartItems((item) => [...item, { name, id, price }])
    }

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {
                    products.map(({ name, id, price }) => (
                        <div key={id} style={{ border: '1px solid black', margin: '1rem' }}>
                            <li>{name}</li>
                            <li>{price}</li>
                            <button onClick={() => addToCart(name, id, price)}>Add To Cart</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductListing;