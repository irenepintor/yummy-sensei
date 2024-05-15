import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from './icons/ItemList';
import data from '../assets/data/data';

const ItemListContainer = () => {
    const [ products, setProducts ] = useState([])
    const { categoryId } = useParams();

    const [ loading, setLoading ] = useState(false)

    useEffect(() =>{
        data()
            .then((response) =>{
                if(categoryId){
                    const filteredProducts = response.filter(product => product.category === categoryId)
                    setProducts(filteredProducts)
                }else{
                setProducts(response)}
            })
            .catch((error) =>{console.log(error);})
            .finally(() =>{console.log("Finalizo la promesa");})
    }, [categoryId])

    return (
        <>
            <ItemList products = {products}/>
        </>
    );
}
export default ItemListContainer;