import { useState, useEffect } from "react";
import { getProductsData } from "../assets/data/data";
import ItemDetail from "./ItemDetailContainer/ItemDetail";

const RecentBoughtProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsData()
        .then(data =>{
            setProducts(data);
        })
        .catch(error =>{
            console.error("Error fetching product data", error);
        });
}, []);

    const handlePurchase = (productId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId && product.stock > 0 ? { ...product, boughtCount: product.boughtCount + 1, stock: product.stock - 1 } : product
            )
        );
    };

    const sortedProducts = products.sort((a, b) => b.boughtCount - a.boughtCount).slice(0, 5);

    return (
        <>
            <div>
                <h2>Productos más Comprados</h2>
                <div className=" flex gap-3 flex-wrap ">
                    {
                        sortedProducts.map(product => (
                            product && <ItemDetail key={product.id} product={product} onPurchase={() => handlePurchase(product.id)} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};
export default RecentBoughtProducts;