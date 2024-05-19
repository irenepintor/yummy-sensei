/* eslint-disable react/prop-types */
import ItemCount from './ItemCount';

const ItemDetail = ({product, addProductToCart}) => {
    const handleAddToCart = (count) =>{
        const cartProduct = {
            ...product, 
            quantity : count
            }
            addProductToCart(cartProduct)
    }

    if(!product || !product.price){
        return <h1>Precio no Disponible!</h1>
    }

    return (
        <>
            <div className='flex justify-center items-center p-6 w-max bg-white rounded shadow'>
                <div className='flex flex-col justify-center items-center '>
                    <div className='  '>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div>
                        <h2>{product.name}</h2>
                        <h6>Categoria: {product.category}</h6>
                        <h6>Stock: {product.stock}</h6>
                    </div>
                    <div>
                        <h3>Precio: ${product.price.toFixed(2)}</h3>
                        <h2>{product.description}</h2>
                    </div>
                    <div>
                        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default ItemDetail;