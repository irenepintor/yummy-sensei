/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useLoading } from '../hooks/useLoading';
import { getProductsData } from '../assets/data/data';
import { useEffect, useState } from 'react';
import ItemList from './icons/ItemList';

const ItemListContainer = ({ greetings }) => {
    const { categoryId } = useParams();
    const { loading, startLoading, stopLoading, loadScreen } = useLoading();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        startLoading();
        getProductsData()
            .then((response) => {
                if (categoryId) {
                    const filteredProducts = response.filter(product => product.category === categoryId);
                    setFilteredProducts(filteredProducts);
                } else {
                    setProducts(response);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                stopLoading();
            });
    }, [categoryId]);

    useEffect(() => {
        if (!categoryId) {
            setFilteredProducts(products);
        }
    }, [categoryId, products]);

    return (
        <>
            <div>
                <h1>{greetings}</h1>
                <div className='flex flex-row place-content-center content-center'>
                    {loading ? loadScreen : <ItemList products={categoryId ? filteredProducts : products} />}
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;

