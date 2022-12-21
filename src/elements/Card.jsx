import React from 'react';
import styled from 'styled-components';
import Carousel from './custom/Carousel';

const Card = ({post}) => {
  console.log(post);
  return (
    <CardWrap>
      <Carousel postId={post.postId} images={post.imagesUrl}></Carousel>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 250px;
  height: calc(250 * 1.4px);
  position: relative;
  background: #fff;
  border-radius: 20px;
  border: 5px solid #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-text);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  i {
    color: #fff;
    font-size: 72px;
  }
`;


export default Card;