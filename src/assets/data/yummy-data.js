import yummyData from './yummy-sensei-menu.json'

const getProducts = () => {
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(() => {
            resolve(yummyData)
        }, 3000);
    });
};
export default getProducts