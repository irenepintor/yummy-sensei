import { useEffect, useState } from 'react';
import ItemList from './icons/ItemList';
import getJSON from '../assets/data/yummy-sensei-menu.json'
//import ItemList from './icons/ItemList';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(getJSON)
            .then((res) => setData(res))
            .catch((err) => console.log(err))
            .finally(() => console.log('JSON loaded'))
        console.log(data);
    }, [data])
    return (
        <>
            <ItemList/>
        </>
    );
}
export default ItemListContainer;