import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/assets/home/slide1.webp'
import slide2 from '../../../assets/assets/home/slide2.webp'
import slide3 from '../../../assets/assets/home/slide3.webp'
import slide4 from '../../../assets/assets/home/slide4.webp'
import slide5 from '../../../assets/assets/home/slide5.webp'
import slide6 from '../../../assets/assets/home/slide6.webp'
import SectionTitle from '../../../Components/SectionTittle/SectionTittle';

const Catagory = () => {
    return (
        <>
      <section>
        <SectionTitle 
            heading={"Order Online"}
            subHeading={"From 11.00am to 10.00pm"}
            ></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
      </Swiper>
      </section>
    </>
    );
};

export default Catagory;