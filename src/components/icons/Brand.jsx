import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <Link to="/" className="flex flex-row justify-between items-center">
            <img className="size-44" src="/src/assets/static/yummy-sensei-logo.png" alt="Yummy Sensei - Japanse Food Restaurant"/>
        </Link>
    );
}
export default Brand;