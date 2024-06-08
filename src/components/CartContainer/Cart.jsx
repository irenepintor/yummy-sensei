import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IconTrash } from '@tabler/icons-react';

const Cart = () => {
    const { cart, clearCart, removeProductById } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-2xl font-bold mb-4">Carrito vacío</h1>
                <Link className="text-blue-500 hover:underline" to="/productos">
                    Ver productos...
                </Link>
            </div>
        );
    }

    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Carrito de compras</h1>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-3/4">
                    {cart.map((productCart) => (
                        <div className="flex items-center justify-between p-4 border-b border-gray-200" key={productCart.id}>
                            <img className="w-24 h-24 rounded-sm object-cover mr-4" src={productCart.image} alt={productCart.name} />
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">{productCart.name}</h3>
                                <p className="text-gray-700">Precio Unitario: ${productCart.price}</p>
                                <p className="text-gray-700">Cantidad: {productCart.quantity}</p>
                                <p className="text-gray-900 font-semibold">Total: ${productCart.price * productCart.quantity}</p>
                            </div>
                            <IconTrash
                                onClick={() => removeProductById(productCart.id)}
                                className="cursor-pointer text-red-500 hover:text-red-600 transition-colors duration-200"
                                size={24}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
                        <p className="text-gray-700 mb-2">Subtotal: ${totalPrice - (totalPrice * 0.21)}</p>
                        <p className="text-gray-700 mb-2">Envío estimado: $2000</p>
                        <p className="text-gray-700 mb-2">Impuestos estimados: ${(totalPrice * 0.21).toFixed(2)}</p>
                        <p className="text-lg font-bold mb-4">Total: ${(totalPrice + 2000 + (totalPrice * 0.21)).toFixed(2)}</p>
                        <Link to="/checkout" className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 text-center">
                            Continuar con mi compra
                        </Link>
                        <button onClick={clearCart} className="block w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200 mt-4">
                            Vaciar carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;