
import React, { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState([])

    const addItem = (newItem) => {


        setCartItem(preItem => [...preItem, newItem]);

    };

     // Remove item by index (or id)
  const removeItem = (itemId) => {
    setCartItem(prevItem => prevItem.filter(item => item.id !== itemId));
  };


    return (


        <CartContext.Provider value={{ addItem, cartItem, removeItem }}>

            {children}

        </CartContext.Provider>


    )
}

export default CartProvider