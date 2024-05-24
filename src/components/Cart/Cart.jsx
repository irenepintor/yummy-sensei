import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../icons/ItemCount";

const Cart = () => {
    const { cart, setCart, clearCart } = useContext(CartContext);

    const handleQuantityChange = (productId, newQuantity) => {
        setCart(cart.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(1, Math.min(newQuantity, item.stock)) } : item
        ));
    };

    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Carrito de compras</h1>
            {cart.map(productCart => (
                <div key={productCart.id} className="flex items-center border-b py-4">
                    <img src={productCart.image} alt={productCart.name} className="w-20 h-auto mr-4" />
                    <div>
                        <h3 className="text-lg font-semibold mb-1">{productCart.name}</h3>
                        <p className="text-gray-700 mb-1">${productCart.price}</p>
                        <ItemCount
                            quantity={productCart.quantity}
                            stock={productCart.stock}
                            onIncrement={() => handleQuantityChange(productCart.id, productCart.quantity + 1)}
                            onDecrement={() => handleQuantityChange(productCart.id, productCart.quantity - 1)}
                        />
                        <p className="text-gray-700 mb-1">Total: ${productCart.price * productCart.quantity}</p>
                    </div>
                </div>
            ))}
            <div className="mt-4">
                <p className="text-lg font-semibold">Total: ${totalPrice}</p>
                <button onClick={clearCart} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-4">Vaciar Carrito</button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Ir a Pagar</button>
            </div>
        </>
    );
};

export default Cart;