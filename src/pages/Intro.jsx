import React from "react";
import Wrapper from "../elements/Wrapper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <IntroBtn>
        <img src="https://velog.velcdn.com/images/buddesign/post/c7d748fa-84e9-4f9e-822a-ccea670ea7f9/image.png" alt=""></img>
        <button
          onClick={() => {
            navigate("/Home");
          }}
        >
          입장하기
        </button>
      </IntroBtn>
    </Wrapper>
  );
};

const IntroBtn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  button {
    position: absolute;
    top: 68%;
    left: 12.8%;
    width: 294px;
    height: 60px;
    border: none;
    background-color: #7e54a2;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default Intro;
