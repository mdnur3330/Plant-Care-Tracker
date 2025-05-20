import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import item1 from "../assets/soil-8080788_1920.jpg"
import item2 from "../assets/ai-generated-9016493_1920.jpg"
import item3 from "../assets/pexels-shvetsa-11286066.jpg"
import item4 from "../assets/pexels-pixabay-269255.jpg"


// import required modules
import { Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img className='w-full h-[70vh]' src={item1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[70vh]' src={item2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[70vh]' src={item3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[70vh]' src={item4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
