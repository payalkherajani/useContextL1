import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ProductListing from './components/ProductListing';

function App() {

  const [route, setRoute] = useState(0);

  return (
    <div className="App">
      Hey! Use Context
      <button onClick={() => setRoute(1)}>Show me Cart</button>
      { route === 0 ? <ProductListing /> : <Cart back={setRoute} />}
    </div>
  );
}

export default App;
