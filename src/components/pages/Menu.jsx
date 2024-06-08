import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Menu.css'

const Menu = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container mx-auto mt-5 py-8">
            <h1 className="text-3xl font-bold ml-5 mb-4">Nuestro Menu</h1>
            <Slider {...settings}>
                <div className="flex menu-item justify-center">
                    <img src="/src/assets/yummy-sensei-menu/entrada-y-udon.png" alt="Entrada y Udon Menu" />
                </div>
                <div className="flex menu-item justify-center">
                    <img src="/src/assets/yummy-sensei-menu/sushi-y-nigiri.png" alt="Sushi y Nigiri Menu" />
                </div>
                <div className="flex menu-item justify-center">
                    <img src="/src/assets/yummy-sensei-menu/sushi-y-nigiri-bis.png" alt="Sushi y Nigiri Menu Bis" />
                </div>
                <div className="flex menu-item justify-center">
                    <img src="/src/assets/yummy-sensei-menu/plato-principal-y-postre.png" alt="Plato Principal y Postre" />
                </div>
                <div className="flex menu-item justify-center">
                    <img src="/src/assets/yummy-sensei-menu/vino-e-infusiones.png" alt="Vino e Infusiones" />
                </div>
            </Slider>
        </div>
    );
};

export default Menu;
