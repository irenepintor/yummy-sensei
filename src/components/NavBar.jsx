import { Link } from "react-router-dom";
import Brand from "./icons/Brand";
import CartWidget from "./icons/CartWidget";

const NavBar = () => {
    return (
        <nav className="flex flex-row justify-center items-center gap-x-6 pt-4">
                <Brand/>
            <div className="flex flex-row gap-x-10 text-gray-800 opacity-80 pt-8">
                <Link to="/home">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/carta">Carta</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;

// Incorporar dropdown menu en el navbar de productos. Utilizar hover y que sirva para filtrar por categoria. Clickear sobre productos lleva a todos los articulos y si no, filtrar.