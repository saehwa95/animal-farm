import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Comment from './Comment';
import MdPrimaryBtn from '../../elements/MdPrimaryBtn';
import InnerBox from '../../elements/InnerBox'

const CommentContainer = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const commentInputHandelr= (e)=> {
    console.log(e.target.value);
    setComment(e.target.value);
  }

  const addCommentHandler = () => {
    // dispatch(__addComment());
  }
  return (
    <>
      <InnerBox justifyContent="space-between"  width="100%" margin="50px 0 0" padding="40px 0" borderTop="solid">
        <CommentBox
          onChange={commentInputHandelr}
        />

        <MdPrimaryBtn onclick={addCommentHandler}>등록</MdPrimaryBtn>
      </InnerBox>
      <InnerBox justifyContent="space-between" width="100%">
        {/* comment?.map(comment) => { return <Comment ...props />} */}
        <Comment></Comment>
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