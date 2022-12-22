import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Carousel = ({postId, images}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  // console.log(images);
  const totalSlide = images.length-1;

  const nextSlide = () => {
    if (currentSlide >= totalSlide) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
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
      <Container>
        <NavLink to={`/detail/${postId}`}>
          <SliderContainer ref={slideRef}>
            {images?.map((image, index) => {
              return <Slide key={index} src={image}/>
            })}
          </SliderContainer>
        </NavLink>
      </Container>

      <Button onClick={prevSlide}>＜</Button>
      <Button onClick={nextSlide}>＞</Button>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록
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
  display: flex;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
`;
export default Carousel;