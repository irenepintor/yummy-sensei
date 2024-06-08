import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../db/db.js';
import useLoading from '../../hooks/useLoading.jsx'
import ItemList from './ItemList';
import ProductCategories from './ProductCategories';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();
    const { loading, startLoading, stopLoading, LoadingScreen } = useLoading();

    const fetchProducts = async () => {
        try {
            startLoading();
            const productsCollection = collection(db, 'products');
            let productsQuery = productsCollection;

            if (categoryId) {
                productsQuery = query(productsCollection, where('category', '==', categoryId));
            }

            const snapshot = await getDocs(productsQuery);
            const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
        } catch (err) {
            setError(`Error fetching products: ${err.message}`);
        } finally {
            stopLoading();
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <ProductCategories />
            <ItemList products={products} />;
        </>
    )
};

export default ItemListContainer;