import yummySenseiData from './yummy-sensei-menu.json'

export const getProductsData = () =>{
    return new Promise((response, reject) =>{
        setTimeout(() =>{
            response(yummySenseiData)
        }, 1000)
    });
};

export const getCategories = async () =>{
    try{
        const products = await getProductsData();
        const categories = Array.from(new Set(products.map(product => product.category)));
        return categories;
    } catch(error){
        console.error('Error fetching product data:', error);
        return [];
    }
}