/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button } from '@headlessui/react';
import { getCategories } from '../assets/data/data';

const CategoryDropdown = ({ onSelectCategory }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [allCategories, setAllCategories] = useState([]);

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

    return (
        <div className='relative'>
            <Button
                className="text-gray-800 opacity-80 hover:opacity-100"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Productos
            </Button>
            {isDropdownOpen && (
                <div className='absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5'>
                    <div className='py-1'>
                        <Button
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            onClick={() => { onSelectCategory(''); setIsDropdownOpen(false); }}>
                            Todos los productos
                        </Button>
                        {allCategories.map((category) => (
                            <Button
                                key={category.id}
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => { onSelectCategory(category.id); setIsDropdownOpen(false); }}>
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryDropdown;
