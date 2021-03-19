import React, { useState } from 'react';

const ProductListing = () => {



    const [products, setProducts] = useState([
        { id: 1, name: 'Bag' },
        { id: 2, name: 'Bottle' },
        { id: 3, name: 'Table' },
        { id: 4, name: 'Chair' }
    ])
    return (
        <div>
            <ul>
                {
                    products.map(({ name, id }) => (
                        <li key={id}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductListing;