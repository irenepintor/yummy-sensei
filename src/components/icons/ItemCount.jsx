/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button } from "@headlessui/react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const plusQuantity = () => {
        if (count < stock) {
            setCount(count + 1);
            }
    };

    const minusQuantity = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAdd = () =>{
        onAdd(count)
    };

    return (
        <>
            <Button type="button" className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10" onClick={minusQuantity}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg>
            </Button>
            <span>{count}</span>
            <Button type="button" className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10" onClick={plusQuantity}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            </Button>
            <Button type="button" className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10" onClick={handleAdd}>Agregar al Carrito</Button>
        </>
    )
}
export default ItemCount;