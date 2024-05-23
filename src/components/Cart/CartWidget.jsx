/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    // const { totalAmount } = useContext(CartContext);



    return (
        <Link to="/cart" className=" flex flex-row justify-between items-center pt-10 ">
            <CartIcon />
            <span>0</span>
            {/* <span>{totalAmount()}</span> */}
        </Link>
    )
}
export default CartWidget;