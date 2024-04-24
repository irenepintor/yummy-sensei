import Brand from "./icons/Brand";
import CartWidget from "./icons/CartWidget";

const NavBar = () => {
    return (
        <nav className="flex flex-row justify-center items-center gap-x-6 pt-4">
                <Brand/>
            <div className="flex flex-row gap-x-10 text-gray-800 opacity-80 pt-8">
                <a href="/index">Inicio</a>
                <a href="/reservas">Reservas</a>
                <a href="/pedidos">Pedidos</a>
                <a href="/carta">Carta</a>
                <a href="/contacto">Contacto</a>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;