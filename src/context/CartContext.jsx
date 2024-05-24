/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart(cartPreview =>{
            const itemIndex = cartPreview.findIndex(item => item.id === product.id);
            if (itemIndex !== -1) {
                const updatedCart = [...cartPreview];
                updatedCart[itemIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...cartPreview, { ...product, quantity }];
            }
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCart(cartPreview => {
            const updatedCart = cartPreview.map(item =>
                item.id === productId ? { ...item, quantity } : item
            );
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCart([]);
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, updateQuantity, clearCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};