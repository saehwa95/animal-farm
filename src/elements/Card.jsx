import React from 'react';
import styled from 'styled-components';
import Carousel from './custom/Carousel';

const Card = () => {
  return (
    <>
      <CardWrap>
        
        <div>
          {/* <CardTitle>Title</CardTitle>
          <CardText>{el.createdAt}</CardText>
          <CardText>{el.content}</CardText> */}
        </div>
        {/* <CardContents> */}
          {/* <NavLink to={`/detail/${el.id}`}> */}
            {/* <CardButton>Detail</CardButton> */}
          {/* </NavLink> */}
        {/* </CardContents> */}
        <Carousel></Carousel>
      </CardWrap>
    </>
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

const CardHeader = styled.div`
  height: 200px;
  width: 100%;
  background-color: ${({ mode }) => {
    console.log(mode);
    switch (mode) {
      case "React":
        return "#ad5858";
      case "Redux":
        return "#7c976c";
      case "Javascript":
        return "#d6a680";
      default:
        return "#48404d";
    }
  }};
  border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
  display: grid;
  place-items: center;
  i {
    color: #fff;
    font-size: 72px;
  }
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

const CardTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 10px;
`;
const CardText = styled.p`
  text-align: center;
  font-size: 12px;
`;
const CardButton = styled.button`
  border: none;
  border-radius: 100px;
  padding: 5px 30px;
  background: #f9d6d4;
  margin-bottom: 15px;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Card;