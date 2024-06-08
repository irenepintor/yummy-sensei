import Contact from "../Contact/Contact";
import ProductCategories from "../ItemListContainer/ProductCategories";
import Banner from "./Banner";
import Menu from "./Menu";

const Home = () =>{
    return(
        <>
            <Banner/>
            <ProductCategories/>
            <Menu/>
            <Contact/>
        </>
    )
}
export default Home;