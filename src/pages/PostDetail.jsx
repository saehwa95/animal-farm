import React,{useEffect} from 'react';

import Wrapper from '../elements/Wrapper';
import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';

import PostContainer from '../components/detail/PostContainer';

import MdPrimaryBtn from '../elements/MdPrimaryBtn';
import MdSecondaryBtn from '../elements/MdSecondaryBtn';
import InnerBox from '../elements/InnerBox'
import CommentContainer from '../components/detail/CommentContainer';
import { __getDetailPost } from "../redux/modules/postsSlice";
import { useSelector, useDispatch } from 'react-redux';

const PostDetail = () => {
  const postId = useParams();
  const dispatch = useDispatch();

  // console.log(postId);
  // console.log(typeof Number(postId.id));
  // console.log(Number(postId.id))

  // console.log(text);

  useEffect(() => {
    dispatch(__getDetailPost({postId: postId}));
  },[]);

  return (
    <Wrapper>
      <PostContainer/>
      <InnerBox padding="40px 0" gap="1.3em" justifyContent="center" >
        <NavLink to={`/update/${postId.id}`}>
          <MdPrimaryBtn>수정하기</MdPrimaryBtn>
        </NavLink>
        <MdSecondaryBtn>삭제하기</MdSecondaryBtn>
      </InnerBox>
      <CommentContainer text={""}/>
    </Wrapper>
  );
};

export default PostDetail;