import { useState } from 'react';
import { toast } from 'react-toastify';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../db/db.js';
import validateContactForm from '../../utils/validationYupContactForm.js';
import ContactForm from './ContactForm';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
        privacyPolicy: false,
    });

    const [messageId, setMessageId] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { status, message } = await validateContactForm(formData);
        if (status === "error") {
            toast.error(message);
            return;
        }

        try {
            const messageData = {
                ...formData,
                date: Timestamp.fromDate(new Date()),
            };
            const docRef = await addDoc(collection(db, 'messages'), messageData);
            setMessageId(docRef.id);
            toast.success('Mensaje enviado con éxito!');
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                mensaje: '',
                privacyPolicy: false,
            });
        } catch (error) {
            toast.error('An unexpected error occurred.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen mt-5 bg-gray-50">
            <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Contacto</h2>
                <ContactForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                {messageId && (
                    <p className="mt-4 text-green-500 text-center font-medium">Mensaje ID: {messageId}</p>
                )}
            </div>
        </div>
    );
};

export default Contact;