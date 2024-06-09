import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import img1 from '/assets/banner/1.png';
import img2 from '/assets/banner/2.png';
import img3 from '/assets/banner/3.png';
import img4 from '/assets/banner/4.png';
import img5 from '/assets/banner/5.png';
import img6 from '/assets/banner/6.png';
import img7 from '/assets/banner/7.png';
import img8 from '/assets/banner/8.png';
import img9 from '/assets/banner/9.png';
import img10 from '/assets/banner/10.png';
import img11 from '/assets/banner/11.png';

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

const Banner = () => {
    return (
        <div id="carousel-sample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carousel-sample"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carousel-sample" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-sample" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
};

export default Banner;