import Brand from "./Brand";

const NavBar = () => {
    return (
        <div className="flex flex-row gap-x-10 opacity-80">
            <Brand/>
            <a href="/index">Inicio</a>
            <a href="/reservas">Reservas</a>
            <a href="/pedidos">Pedidos</a>
            <a href="/carta">Carta</a>
            <a href="/contacto">Contacto</a>
        </div>
    )
}
export default NavBar;