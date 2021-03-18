import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContext } from './context/CartContext';


ReactDOM.render(
  <React.StrictMode>
    <CartContext.Provider value={{ id: 1, user: 'Payal' }}>
      <App />
    </CartContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


