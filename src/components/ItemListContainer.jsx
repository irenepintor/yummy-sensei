import { useEffect, useState } from "react";
import ItemList from './icons/ItemList';
import Data from '../assets/data/yummy-sensei-menu.json'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch({Data})
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <ItemList items={items}/>
        </>
    )
}
export default ItemListContainer;