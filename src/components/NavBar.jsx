import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '/assets/yummy-sensei-logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser, logout } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <>
            <nav className="bg-white shadow-lg mb-4">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <Link to='/' className="flex items-center">
                            <img src={logo} alt='Yummy Sensei' className="h-10 mr-2" />
                        </Link>
                        <div className="hidden md:flex items-center space-x-4">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link to='/' className="text-gray-600 hover:text-gray-800">Inicio</Link>
                                </li>
                                <li>
                                    <Link to='/productos' className="text-gray-600 hover:text-gray-800">Productos</Link>
                                </li>
                                <li>
                                    <Link to='/menu' className="text-gray-600 hover:text-gray-800">Menu</Link>
                                </li>
                                <li>
                                    <Link to='/contacto' className="text-gray-600 hover:text-gray-800">Contacto</Link>
                                </li>
                                {currentUser ? (
                                    <li>
                                        <button onClick={handleLogout} className="text-gray-600 font-bold hover:text-gray-800">Cerrar Sesión</button>
                                    </li>
                                ) : (
                                    <>
                                        <li>
                                            <Link to='/login' className="text-gray-600 font-bold hover:text-gray-800">Iniciar Sesión</Link>
                                        </li>
                                        <li>
                                            <Link to='/signup' className="text-gray-600 font-bold hover:text-gray-800">Registrarse</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                            <div className="flex items-center space-x-4">
                                <button className="pl-2 text-gray-600 hover:text-gray-800">
                                    <CartWidget />
                                </button>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <ul className="px-2 py-3">
                        <li>
                            <Link to='/' className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Inicio</Link>
                        </li>
                        <li>
                            <Link to='/productos' className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Productos</Link>
                        </li>
                        <li>
                            <Link to='/menu' className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Menu</Link>
                        </li>
                        <li>
                            <Link to='/contacto' className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Contacto</Link>
                        </li>
                        {currentUser ? (
                            <li>
                                <button onClick={handleLogout} className="block py-2 px-4 font-bold text-sm text-gray-600 hover:bg-gray-100">Cerrar Sesión</button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to='/login' className="block py-2 px-4 font-bold text-sm text-gray-600 hover:bg-gray-100">Iniciar Sesión</Link>
                                </li>
                                <li>
                                    <Link to='/signup' className="block py-2 px-4 font-bold text-sm text-gray-600 hover:bg-gray-100">Registrarse</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default NavBar;