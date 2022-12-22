import React,{ useEffect } from 'react';

import Wrapper from '../elements/Wrapper';
import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';

import PostContainer from '../components/detail/PostContainer';

import MdPrimaryBtn from '../elements/MdPrimaryBtn';
import MdSecondaryBtn from '../elements/MdSecondaryBtn';
import InnerBox from '../elements/InnerBox'
import CommentContainer from '../components/detail/CommentContainer';
import { __getDetailPost, __deletePosts } from "../redux/modules/postsSlice";
import { useSelector, useDispatch } from 'react-redux';

const PostDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  
  const {posts} = useSelector((state) => state.postsSlice);

  // const { text, postId, imageUrl } = posts[0] ?? {
  //   text: "",
  //   postId: 0,
  //   imagesUrl: []
  // };
  console.log(posts);
  // console.log(id);
  
  useEffect(() => {
    dispatch(__getDetailPost({postId: id}));
  },[]);

  return (
    <Wrapper>
      <PostContainer post={posts}/>
      <InnerBox padding="40px 0" gap="1.3em" justifyContent="center" >
        <NavLink to={`/update/${id}`}>
          <MdPrimaryBtn>수정하기</MdPrimaryBtn>
        </NavLink>
        <MdSecondaryBtn onClick={() => dispatch(__deletePosts({id}))}>삭제하기</MdSecondaryBtn>
      </InnerBox>
      <CommentContainer postId={id}/>
    </Wrapper>
  );
};

export default PostDetail;