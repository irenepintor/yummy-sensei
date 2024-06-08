import { object, string } from "yup";

const userSchema = object({
    name: string().required("Name is required"),
    email: string().email("Invalid email address").required("Email is required"),
    address: string().required("Address is required"),
    city: string().required("City is required"),
    state: string().required("State is required"),
    zip: string().required("Zip Code is required"),
    cardNumber: string().required("Card Number is required"),
    expiryDate: string().required("Expiry Date is required"),
    cvv: string().required("CVV is required"),
});

const validateForm = async (formData) => {
    try {
        await userSchema.validate(formData, { abortEarly: false });
        return { status: "success" };
    } catch (error) {
        return {
            status: "error",
            message: error.errors.join(", ")
        };
    }
};

export default validateForm;