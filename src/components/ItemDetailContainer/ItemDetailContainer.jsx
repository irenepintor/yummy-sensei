import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../db/db.js'
import useLoading from "../../hooks/useLoading.jsx";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { itemId } = useParams();
    const { loading, startLoading, stopLoading, LoadingScreen } = useLoading();

    const getProduct = async () => {
        if (!itemId) {
            setError("Product ID is not defined");
            stopLoading();
            return;
        }

        try {
            startLoading();
            const productRef = doc(db, "products", itemId);
            const snapshot = await getDoc(productRef);

            if (snapshot.exists()) {
                const data = { id: snapshot.id, ...snapshot.data() };
                setProduct(data);
            } else {
                setError("No such document!");
            }
        } catch (err) {
            setError(`Error getting document: ${err.message}`);
        } finally {
            stopLoading();
        }
    };

    useEffect(() => {
        getProduct();
    }, [itemId]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {product && <ItemDetail product={product} />}
        </>
    )
};
export default ItemDetailContainer;