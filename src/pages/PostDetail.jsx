import React from 'react';

import Wrapper from '../elements/Wrapper';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PostContainer from '../components/detail/PostContainer';

import Comment from '../components/detail/Comment';
import MdPrimaryBtn from '../elements/MdPrimaryBtn';
import MdSecondaryBtn from '../elements/MdSecondaryBtn';
import InnerBox from '../elements/InnerBox'
import CommentContainer from '../components/detail/CommentContainer';

const PostDetail = () => {

  // const {posts, isloading, error} = useSelector((state) => state.postsSlice2);

  const id = useParams();

  return (
    <Wrapper>
      <PostContainer/>
      <InnerBox padding="40px 0" gap="1.3em" justifyContent="center" >
        <MdPrimaryBtn>수정하기</MdPrimaryBtn>
        <MdSecondaryBtn>삭제하기</MdSecondaryBtn>
      </InnerBox>
      <CommentContainer/>
    </Wrapper>
  );
};

export default PostDetail;