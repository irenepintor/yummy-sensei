import { useEffect, useState } from "react";
import getProductsData from "../assets/data/data";
import ItemDetail from "./icons/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const { itemId } = useParams()

    const handleAddProductToCart = (product) =>{
        console.log(product)
    }

    useEffect(()=>{
        getProductsData()
        .then((response) =>{
            const findProduct = response.find((productResponse) => productResponse.id === itemId )
            setProduct(findProduct)
        })
        .catch(error => console.log(error))
        .finally(()=> console.log("finalizado"))
    },[itemId])
    
    return(
        <>
            <ItemDetail product={product} addProduct={handleAddProductToCart} />
        </>
    )
}
export default ItemDetailContainer;