/* eslint-disable react/prop-types */
const ItemCount = ({ quantity, onIncrement, onDecrement, stock }) => {

    return (
        <>
            <div className="flex items-center">
            <button
                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-l-md hover:bg-gray-300 focus:outline-none"
                onClick={onDecrement}
                disabled={quantity <= 1}
            >
                -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button
                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-r-md hover:bg-gray-300 focus:outline-none"
                onClick={onIncrement}
                disabled={quantity >= stock}
            >
                +
            </button>
        </div>
        </>
    )
}
export default ItemCount;