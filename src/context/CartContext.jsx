/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newProduct) => {
        setCart([...cart, newProduct]);
    };

    const totalAmount = cart.reduce((acc, product) => acc + product.price, 0);

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, totalAmount, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
export { CartContext, CartProvider };