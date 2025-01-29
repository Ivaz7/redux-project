import { Swiper } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';

const CustomSwiper = (prop) => {
  const swiperRef = useRef(null);

  return (
    <div style={{ width: "100vw" }} className="px-4 d-flex justify-content-center gap-2">
      <button 
        className="swiperBtn swiper-button-prev" 
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <Swiper
        ref={swiperRef}
        loop={true}
        spaceBetween={95}
        slidesPerView={4}
        freeMode={true}
      >
        {prop.slides}
      </Swiper>

      <button 
        className="swiperBtn swiper-button-next" 
        onClick={() => swiperRef.current.swiper.slideNext()} 
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default CustomSwiper;
