/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { getProductsData } from '../../assets/data/data';
import ItemList from './ItemList';

const ItemListContainer = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);

    const fetchProducts = async () => {
        try {
            const productsData = await getProductsData();
            if (selectedCategory) {
                setProducts(productsData.filter(product => product.category === selectedCategory));
            } else {
                setProducts(productsData);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h1 className=''>{selectedCategory ? `Categoría: ${selectedCategory}` : 'Productos:'}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;

