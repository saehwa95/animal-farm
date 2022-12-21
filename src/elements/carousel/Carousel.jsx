import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Nata from '../../images/nata.jpeg'
import Carousel from './Carousel';
import styled from 'styled-components';

SwiperCore.use([Navigation, Pagination]);

const ImgSlider = () => {
  return(
    <CarouselWrapper>
      <Swiper 
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
				scrollbar={{ draggable: true }}
				loop={true}
      >
        {/* <SwiperSlide><img src={Nata} alt="Nata"/></SwiperSlide>
				<SwiperSlide><img src={Nata} alt="Nata"/></SwiperSlide>
				<SwiperSlide><img src={Nata} alt="Nata"/></SwiperSlide> */}
				
      </Swiper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
	width: 600px;
	height: 600px;
`;
export default ImgSlider;