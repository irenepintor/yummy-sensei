/* eslint-disable react/prop-types */
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
    return (
        <>
            <div>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <h6>Categoria: {product.category}</h6>
                <h6>Stock: {product.stock}</h6>
                <h3>Precio: ${product.price}</h3>
                <h2>{product.description}</h2>
                <ItemCount/>
            </div>
        </>
    );
};
export default ItemDetail;