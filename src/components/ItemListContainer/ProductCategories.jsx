import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/db.js';
import { Link } from 'react-router-dom';
import useLoading from '../../hooks/useLoading.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const { loading, startLoading, stopLoading, LoadingScreen } = useLoading();
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        startLoading();
        try {
            const productsCollection = collection(db, 'products');
            const snapshot = await getDocs(productsCollection);
            const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            const categoriesMap = productsList.reduce((acc, product) => {
                if (!acc[product.category]) {
                    acc[product.category] = [];
                }
                acc[product.category].push(product);
                return acc;
            }, {});
            
            const categoriesList = Object.keys(categoriesMap).map(categoryId => {
                const categoryProducts = categoriesMap[categoryId];
                const representativeProduct = categoryProducts[0];
                return { id: categoryId, name: categoryId, image: representativeProduct.image };
            });

            setCategories(categoriesList);
        } catch (err) {
            setError(`Error fetching categories: ${err.message}`);
        } finally {
            stopLoading();
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
    {categories.map((category) => (
        <div key={category.id} className="px-4 mt-5 mb-4">
            <Link
                to={`/category/${category.id}`}
                className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md text-center transition duration-300 w-full max-w-xs"
            >
                <div className="relative h-40 md:h-48">
                    <img
                        src={category.image}
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transition duration-300 hover:scale-105"
                    />
                </div>
                <div className="mt-2">{category.name}</div>
            </Link>
        </div>
    ))}
</Slider>

    );
};

export default ProductCategories;
