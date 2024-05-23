import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    return (
        <>
            <h1>Cart</h1>
            {
                cart.map((productCart) =>(
                    <div key={productCart.id}>
                        <img src={productCart.image} alt={productCart.name} />
                        <h3>{productCart.name}</h3>
                        <p>${productCart.price}</p>
                        <p>{productCart.quantity}</p>
                        <p>${productCart.price * productCart.quantity}</p>
                    </div>
                ))
            }
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button>Checkout</button>
        </>
    )
}
export default Cart;