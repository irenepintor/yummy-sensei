/* eslint-disable react/prop-types */
const Item = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700 mt-1">{product.description}</p>
            <p className="text-gray-900 font-bold mt-2">${product.price}</p>
        </div>
    );
}

export default Item;