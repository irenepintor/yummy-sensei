/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <Link to={`/item/${product.id}`} key={product.id}>
                    <Item product={product} />
                </Link>
            ))}
        </div>
    );
}

export default ItemList;