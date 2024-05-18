/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../assets/data/data';
import ItemList from './icons/ItemList';
import useLoading from '../hooks/useLoading';

const ItemListContainer = ( {greetings} ) => {
    const [ products, setProducts ] = useState([])
    const { loading, startLoading, stopLoading, loadScreen } = useLoading()
    const { categoryId } = useParams();

    useEffect(() =>{
        startLoading()
        data()
            .then((response) =>{
                if(categoryId){
                    const filteredProducts = response.filter(product => product.category === categoryId)
                    setProducts(filteredProducts)
                }else{
                setProducts(response)}
            })
            .catch((error) =>{console.log(error);})
            .finally(() =>{stopLoading()})
    }, [categoryId])

    return (
        <>
            <div>
                <h1>{greetings}</h1>
                <div className='flex flex-row place-content-center content-center'>
                    { loading ? loadScreen : <ItemList products = {products}/> }
                </div>
            </div>
        </>
    );
}
export default ItemListContainer;