import { Card, CardFooter, CardHeader } from '@fluentui/react-components';
import ItemCount from './ItemCount';

const ItemDetail = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <img src="" alt="" />
                    <h2></h2>
                </CardHeader>
                <CardFooter>
                    <ItemCount/>
                </CardFooter>
            </Card>
        </>
    );
};
export default ItemDetail;

        // "id": 1,
		// "name": "KARAAGE",
		// "image": "/karaagee.png",
		// "section": "entradas",
		// "description": "Buñuelos de pollo fritos y rebozados en masa acompañado con salsa semi picante",
		// "price": 5000,
		// "stock": 10