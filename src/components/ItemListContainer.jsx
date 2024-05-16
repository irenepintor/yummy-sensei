import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from './icons/ItemList';
import data from '../assets/data/data';
import { IconLoader } from '@tabler/icons-react';

const ItemListContainer = () => {
    const [ products, setProducts ] = useState([])
    const { categoryId } = useParams();

    const [ loading, setLoading ] = useState(false)

    useEffect(() =>{
        setLoading(true)
        data()
            .then((response) =>{
                if(categoryId){
                    const filteredProducts = response.filter(product => product.category === categoryId)
                    setProducts(filteredProducts)
                }else{
                setProducts(response)}
            })
            .catch((error) =>{console.log(error);})
            .finally(() =>{setLoading(false)})
    }, [categoryId])

    return (
        <>
            {
                loading ? <IconLoader>Cargando...</IconLoader> : <ItemList products = {products}/>
            }
        </>
    );
}
export default ItemListContainer;