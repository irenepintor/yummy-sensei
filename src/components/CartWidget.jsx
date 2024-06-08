import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartIcon from "../components/CartContainer/CartIcon";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 transition">
            <CartIcon />
            <span className="text-lg font-semibold text-gray-800">{totalItems}</span>
        </Link>
    );
};

export default CartWidget;