import { object, string, boolean } from "yup";

const contactFormSchema = object({
    nombre: string().required('Nombre is required'),
    apellido: string().required('Apellido is required'),
    email: string().email('Invalid email address').required('Email is required'),
    telefono: string().required('Teléfono is required'),
    mensaje: string().required('Mensaje is required'),
    privacyPolicy: boolean().oneOf([true], 'Debe aceptar la política de privacidad'),
});

const validateContactForm = async (formData) => {
    try {
        await contactFormSchema.validate(formData, { abortEarly: false });
        return { status: "success" };
    } catch (error) {
        return {
            status: "error",
            message: error.errors.join(", ")
        };
    }
};

export default validateContactForm;