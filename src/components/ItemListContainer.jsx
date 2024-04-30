import { useEffect, useState } from 'react';
import getJSON from '../assets/data/yummy-sensei-menu.json'
//import ItemList from './icons/ItemList';

const ItemListContainer = (products) => {
    const [ data, setData ] = useState([]);
    useEffect(() =>{
        getJSON()
            .then((res) => setData(res))
            .catch((err) => console.log(err))
            .finally(() => console.log('JSON loaded'))
            console.log(data);
    }, [data])

    
    return (
        <div>
            {products}
        </div>
    );
}
export default ItemListContainer;