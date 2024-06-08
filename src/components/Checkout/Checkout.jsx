import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../db/db.js';
import validateForm from '../../utils/validationYup'
import Form from './Form';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculatedTotal = totalPrice
        if (typeof calculatedTotal === 'number' && !isNaN(calculatedTotal)) {
            setTotal(calculatedTotal)
        } else {
            setTotal(0)
        }
    }, [totalPrice])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await validateForm(formData)
            if (response.status === "success") {
                const order = {
                    buyer: { ...formData },
                    items: [...cart],
                    date: Timestamp.fromDate(new Date()),
                    total: total
                };
                generateOrder(order)
            } else {
                toast.warning(response.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    const generateOrder = (order) => {
        const ordersRef = collection(db, 'orders');
        addDoc(ordersRef, order)
            .then((res) => {
                setIdOrder(res.id);
                toast.success('¡Pedido realizado exitosamente!');
            })
            .catch((err) => {
                console.error(err);
                toast.error('No se pudo realizar el pedido.');
            })
            .finally(() => {
                updateStock();
                clearCart();
            });
    };


    const updateStock = () => {
        cart.forEach((productCart) => {
            let quantity = productCart.quantity;
            const productRef = doc(db, 'products', productCart.id);
            setDoc(productRef, {
                ...productCart,
                stock: productCart.stock - quantity
            })
                .then(() => console.log('Stock updated'))
                .catch((err) => console.error(err));
        });
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Checkout</h2>
                    <Form
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                    {idOrder && (
                        <p className="mt-4 text-green-500 text-center font-medium">Order Number: {idOrder}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Checkout;
