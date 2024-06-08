import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../db/db.js'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { itemId } = useParams();

    const getProduct = async () => {
        if (!itemId) {
            setError("Product ID is not defined");
            setLoading(false);
            return;
        }

        try {
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
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, [itemId]);

    if (loading) {
        return <div>Loading...</div>;
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