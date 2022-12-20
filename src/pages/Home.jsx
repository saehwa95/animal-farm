import React from "react";
import Write from "../components/home/Write";
import MdPrimaryBtn from "../elements/MdPrimaryBtn";
import Wrapper from "../elements/Wrapper";
import Card from "../elements/Card";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <MdPrimaryBtn
        onClick={() => {
          navigate("/create");
        }}
      >
        반려동물 자랑하기
      </MdPrimaryBtn>
      <Card style={{ margin: "40px" }}></Card>
    </Wrapper>
  );
};

export default Home;
