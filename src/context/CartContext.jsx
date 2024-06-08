import { useState } from 'react';
import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newProduct) => {
        const condition = isInCart(newProduct.id)
        if (condition) {
            const newCart = cart.map(prod => {
                if (prod.id === newProduct.id) {
                    return {
                        ...prod,
                        quantity: prod.quantity + newProduct.quantity
                    }
                } else {
                    return prod
                }
            })
            setCart(newCart);
        } else {
            setCart([...cart, newProduct]);
        }
    };

    const getTotalQuantity = () => cart.reduce((total, product) => total + product.quantity, 0);

    const getTotalPrice = () => cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (productId) => cart.some(product => product.id === productId);

    const removeProductById = (productId) => {
        const filteredProducts = cart.filter(product => product.id !== productId);
        setCart(filteredProducts);
    };


    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, getTotalQuantity, getTotalPrice, clearCart, isInCart, removeProductById }}>
                {children}
            </CartContext.Provider>
        </>
    )
};
export { CartProvider, CartContext};