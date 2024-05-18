import yummySenseiData from './yummy-sensei-menu.json'

const getProductsData = () =>{
    return new Promise((response, reject) =>{
        setTimeout(() =>{
            response(yummySenseiData)
        }, 1000)
    });
};

export default getProductsData;