import CartIcon from "../icons/CartIcon";

const CartWidget = () => {
    return (
        <div className=" flex flex-row justify-between items-center pt-10 ">
            <CartIcon />
            <span>0</span>
        </div>
    )
}
export default CartWidget;