import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Link to={`/item/${product.id}`} className="block bg-white p-4 mt-5 mb-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
            <img className="w-full h-48 object-cover rounded-lg mb-4" src={product.image} alt={product.name} />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-blue-600 font-bold mb-4">${product.price}</p>
        </Link>
    );
};

export default Item;


