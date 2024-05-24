import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "./CartIcon";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" className="flex flex-row justify-between items-center pt-10">
            <CartIcon />
            <span>{totalItems}</span>
        </Link>
    );
};

export default CartWidget;