/* eslint-disable react/prop-types */
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
    const addProduct = (count) =>{
        const cartProduct = {
            ...product, 
            quantity : count
            }
            addProduct(cartProduct)
    }
    return (
        <>
            <div>
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div>
                    <h2>{product.name}</h2>
                    <h6>Categoria: {product.category}</h6>
                    <h6>Stock: {product.stock}</h6>
                </div>
                <div>
                    <h3>Precio: ${product.price}</h3>
                    <h2>{product.description}</h2>
                </div>
                    <ItemCount stock={product.stock} initial={1} onAdd={addProduct} />
            </div>
        </>
    );
};
export default ItemDetail;