import ItemListContainer from "./ItemListContainer/ItemListContainer";
import RecentBoughtProducts from "./RecentBoughtProducts";

const Home = () => {
    return (
        <div>
            <h1>Bienvenidos a Yummy Sensei!</h1>
            <RecentBoughtProducts />
            <ItemListContainer/>
        </div>
    );
};
export default Home;