import { Card, CardFooter, CardHeader } from '@fluentui/react-components';
// import Item from "./Item";

function displayItemDetail() {
    
}

const ItemList = () => {
    return (
        <>
        
            <Card onClick={displayItemDetail()}>
                <CardHeader>
                    <img src="" alt="" />
                    <h2></h2>
                </CardHeader>
                <CardFooter>

                </CardFooter>
            </Card>
        </>
    );
};
export default ItemList;

        // "id": 1,
		// "name": "KARAAGE",
		// "image": "/karaagee.png",
		// "section": "entradas",
		// "description": "Buñuelos de pollo fritos y rebozados en masa acompañado con salsa semi picante",
		// "price": 5000,
		// "stock": 10