const ItemCount = ({stock, initial, onAdd}) => {
    return (
        <div>
            <p>Stock disponible: {stock}</p>
            <p>Cantidad inicial: {initial}</p>
            <button onClick={() => onAdd(initial)}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;