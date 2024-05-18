import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";

const useLoading = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
    };

    const stopLoading = () => {
        setLoading(false);
    };

    const loadScreen = <div><IconLoader2/></div>

    return { loading, startLoading, stopLoading, loadScreen };
};
export default useLoading;