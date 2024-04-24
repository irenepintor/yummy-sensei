import ItemCount from "./ItemCount";

const Item = ({item}) => {
    return (
        <div className="item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock}/>
        </div>
    );
};
export default Item;