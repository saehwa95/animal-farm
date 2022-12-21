import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';

import Img1 from '../../images/image1.JPG'
import Img2 from '../../images/image2.JPG'
import Nata from '../../images/nata.jpeg'
import Slide from './Slide';
const TOTAL_SLIDES = 2;

const Carousel = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
    
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Container>
          {/* {currentSlide} */}
          <SliderContainer ref={slideRef}>
            <Slide img={Img1} />
            <Slide img={Img2} />
            <Slide img={Nata} />
          </SliderContainer>
        </Container>
        <Button onClick={prevSlide}>＜</Button>
        <Button onClick={nextSlide}>＞</Button>
      </div>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 .
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5em 2em;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #fff;
  }
  &:first-child{
    left:0;
  }
  &:last-child{
    right:0;
  }
`;
const SliderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

export default Carousel;