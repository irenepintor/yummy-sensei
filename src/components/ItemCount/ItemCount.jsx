import { useState } from "react";

const ItemCount = ({ stock, onAdd }) =>{
    const [count, setCount] = useState(1);

    const decrement = () =>{
        if(count > 1){
            setCount(count - 1);
        }
    }
    const increment = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    }
    const handleAdd = () =>{
        onAdd(count);
    }
    return(
        <>
            <div className="flex items-center">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={decrement}>-</button>
                <span className="text-gray-900 font-semibold px-4">{count}</span>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={increment}>+</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded" onClick={handleAdd}>Agregar</button>
            </div>
        </>
    )
}
export default ItemCount;