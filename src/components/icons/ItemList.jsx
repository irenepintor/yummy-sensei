/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <>
            {
                products.map((data) =>(
                    <Item key={data.id} data={data}/>
                ))
            }
        </>
    );
};
export default ItemList;