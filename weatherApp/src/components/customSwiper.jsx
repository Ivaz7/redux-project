import { Swiper } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';

const CustomSwiper = (prop) => {
  const swiperRef = useRef(null);

  return (
    <>
      <button 
        className="swiperBtn swiper-button-prev" 
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <Swiper
        ref={swiperRef}
        loop={true}
        spaceBetween={prop.space}
        slidesPerView={prop.countSlide}
        speed={200}        
      >
        {prop.slides}
      </Swiper>

      <button 
        className="swiperBtn swiper-button-next" 
        onClick={() => swiperRef.current.swiper.slideNext()} 
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </>
  );
};

export default CustomSwiper;
