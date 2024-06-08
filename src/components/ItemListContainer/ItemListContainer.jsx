import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../db/db.js';
import ItemList from './ItemList';
import ProductCategories from './ProductCategories';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    const fetchProducts = async () => {
        try {
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
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <div>Loading...</div>;
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


