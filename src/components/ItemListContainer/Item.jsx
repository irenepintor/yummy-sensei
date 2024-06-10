import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Link to={`/item/${product.id}`} className="block bg-white p-4 mt-5 mb-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg md:flex md:flex-col md:h-full">
    <img className="w-full h-48 object-cover rounded-lg mb-4 md:h-64" src={product.image} alt={product.name} />
    <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-2 flex-grow">{product.description}</p>
        <p className="text-blue-600 font-bold mb-4">${product.price}</p>
    </div>
</Link>
    );
};

export default Item;


