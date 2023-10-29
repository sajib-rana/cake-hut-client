import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/assets/home/img1.webp'
import img2 from '../../../assets/assets/home/img2.webp'
import img3 from '../../../assets/assets/home/img3.webp'
import img4 from '../../../assets/assets/home/img4.webp'
import img5 from '../../../assets/assets/home/img5.webp'
import img6 from '../../../assets/assets/home/img6.webp'

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
    );
};

export default Banner;