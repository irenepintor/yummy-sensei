/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <>
            <div className="item-detail bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{product.name}</h2>
            <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded-md" />
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-900 font-semibold">${product.price}</p>
            <button onClick={handleAddToCart} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Agregar
            </button>
        </div>
        </>
    );
}

export default ItemDetail;