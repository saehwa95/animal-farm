import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import MdPrimaryBtn from '../../elements/MdPrimaryBtn';
import InnerBox from '../../elements/InnerBox'
import {__addComment, __getComments} from "../../redux/modules/commentSlice"

const CommentContainer = ({postId}) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  
  const commentInputHandler= (e)=> {
    console.log(e.target.value);
    setComment(e.target.value);
  }

  // useEffect(()=> {
  //   dispatch(__getComments({postId}));
  // },[dispatch])

  // console.log(comments);
  
  const addCommentHandler = () => {
    // console.log(comment, postId);
    dispatch(__addComment({comment, postId}));
  }

  console.log("commentconatinetr",postId);
  return (
    <>
      <InnerBox justifyContent="space-between"  width="100%" margin="50px 0 0" padding="40px 0" borderTop="solid">
        <CommentBox
          value={comment}
          onChange={commentInputHandler}
        />
        <MdPrimaryBtn onClick={addCommentHandler}>등록</MdPrimaryBtn>
      </InnerBox>
      <InnerBox justifyContent="space-between" width="100%">
        {/* comment?.map(comment) => { return <Comment ...props />} */}
        <Comment postId={postId}></Comment>
      </InnerBox>
    </>
  );
};

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

export default CommentContainer;