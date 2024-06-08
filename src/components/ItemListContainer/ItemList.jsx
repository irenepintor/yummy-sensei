import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 ml-10 mr-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;

