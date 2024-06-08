import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";

const useLoading = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => setLoading(true);

    const stopLoading = () => setLoading(false);

    const LoadingScreen = () => (
        <div className="flex justify-center items-center min-h-screen">
            <IconLoader2 className="animate-spin w-16 h-16 text-blue-500" />
        </div>
    );

    return { loading, startLoading, stopLoading, LoadingScreen };
};

export default useLoading;
