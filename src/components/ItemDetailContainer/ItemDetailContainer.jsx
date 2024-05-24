/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsData } from "../../assets/data/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        fetchProductsDetails();
    }, [itemId])

    const fetchProductsDetails = async () =>{
        try{
            const productsData = await getProductsData();
            const selectedProduct = productsData.find(product => product.id === itemId);
            if (selectedProduct){
                setProduct(selectedProduct);
            } else{
                console.log(`Product with ID ${itemId} not found`);
            }
            setLoading(false);
        } catch(error){
            console.log('Error fetching product details:', error);
            setLoading(false);
        }
    };

    if(loading){
        return <div>Loading...</div>
    }

    if(product === null){
        return <div>Product not found...</div>
    }

    return(
        <div>
            <ItemDetail product={product} />
        </div>
    )
}
export default ItemDetailContainer;