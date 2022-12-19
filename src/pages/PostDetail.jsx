import React from 'react';
import Wrapper from '../elements/Wrapper';
import Nata from "../images/nata.jpeg"

import styled from 'styled-components';

import Comment from '../components/detail/Comment';
import TextBox from '../elements/TextBox';
import MdPrimaryBtn from '../elements/MdPrimaryBtn';
import MdSecondaryBtn from '../elements/MdSecondaryBtn';
import InnerBox from '../elements/InnerBox'
import { useNavigate, useParams } from 'react-router-dom';

const PostDetail = () => {
  const id = useParams();
  const navigate = useNavigate();
  console.log(id.id);
  return (
    <Wrapper>
      <PostContainer>
        <ImageDiv src={Nata}/>
        <TextBox width="590px" height="568px"/>
      </PostContainer>
      <InnerBox padding="40px 0" gap="1.3em" justifyContent="center" >
        <MdPrimaryBtn>
          수정하기
        </MdPrimaryBtn>
        <MdSecondaryBtn>삭제하기</MdSecondaryBtn>
      </InnerBox>
      <InnerBox justifyContent="space-between"  width="100%" margin="50px 0 0" padding="40px 0" borderTop="solid">
        <CommentBox>
        </CommentBox>
        <MdPrimaryBtn>등록</MdPrimaryBtn>
      </InnerBox>
      <InnerBox justifyContent="space-between" width="100%">
        {/* comment?.map(comment) => { return <Comment ...props />} */}
        <Comment></Comment>
      </InnerBox>
    </Wrapper>
  );
};

const ImageDiv = styled.img`
  width : 590px;
  height: 600px;
`;

const PostContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direciton: row;
  justify-content: space-between;
  gap: 20px;
`;

const CommentBox = styled.input`
  width: 80%;
  padding: 0 10px;
  background-color: #f5f5f5;
  color: "#000";
  padding: "16px";
  font-size: 18px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export default PostDetail;