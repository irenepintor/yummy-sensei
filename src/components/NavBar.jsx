/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from '@headlessui/react';
import { useCategory } from "../context/CategoryContext";
import { getCategories } from '../assets/data/data';
import { useEffect, useState } from 'react';
import Brand from "./icons/Brand";
import CartWidget from "./icons/CartWidget";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [allCategories, setAllCategories] = useState([]);
    const { setCategoryFilter } = useCategory()

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const categoriesData = await getCategories();
            setAllCategories(categoriesData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleCategoryClick = (category) => {
        setCategoryFilter(category);
        setIsDropdownOpen(false);
    }

    return (
        <nav className="flex flex-row justify-center items-center gap-x-6 pt-4">
            <Brand />
            <Link to="/home">Inicio</Link>
            <div className='relative'>
                <Button
                    className="text-gray-800 opacity-80 hover:opacity-100"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    Productos
                </Button>
                {
                    isDropdownOpen && (
                        <div
                            className='absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5'>
                            <div className='py-1'>
                                <Link
                                    to='/productos'
                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                                    onClick={() => handleCategoryClick('')}>
                                    Todos los productos
                                </Link>
                                {
                                    allCategories.map((category) => (
                                        <Button
                                            key={category.id}
                                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                                            onClick={() => handleCategoryClick(category)}>
                                            {category}
                                        </Button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex flex-row gap-x-10 text-gray-800 opacity-80 pt-8">
                <Link to="/carta">Carta</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;