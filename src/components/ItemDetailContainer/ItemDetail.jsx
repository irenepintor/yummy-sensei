import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import ProductCategories from '../ItemListContainer/ProductCategories';

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const onAdd = (count) => {
        const productToAdd = { ...product, quantity: count };
        addToCart(productToAdd);
    }

    return (
        <>
            <ProductCategories/>
            <div className="max-w-4xl mx-auto p-6 mt-5 mb-4 bg-white shadow-md rounded-lg flex">
                <div className="w-1/2">
                    <img className="w-full h-auto object-cover rounded-lg" src={product.image} alt={product.name} />
                </div>
                <div className="w-1/2 pl-10">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <div className="text-xl font-semibold text-gray-700 mb-4">${product.price}</div>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <div className="flex mb-4">
                        <ItemCount 
                            stock={product.stock}
                            initial={1}
                            onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail;