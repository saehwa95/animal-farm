import React, {useEffect} from "react";

import MdPrimaryBtn from "../elements/MdPrimaryBtn";
import Wrapper from "../elements/Wrapper";
import Card from "../elements/Card";
import InnerBox from "../elements/InnerBox"

import { useNavigate } from "react-router-dom";
import { __getPosts, __deletePosts } from "../redux/modules/postsSlice";
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {posts, isloading, error} = useSelector((state) => state.postsSlice);

  useEffect(()=>{
    dispatch(__getPosts());
  }, []);

  return (
    <Wrapper>
      <MdPrimaryBtn
        onClick={() => {
          navigate("/create");
        }}
      >
        반려동물 자랑하기
      </MdPrimaryBtn>
      <MdPrimaryBtn
      onClick={() => dispatch(__deletePosts(61))}
      >데이터 삭제</MdPrimaryBtn>
      <InnerBox flexWrap="wrap" gap="40px">
        {posts?.map((post, index) => {
          return <Card key={index} post={post} style={{ margin: "40px" }}></Card>
        })}
      </InnerBox>
      
    </Wrapper>
  );
};

export default Home;