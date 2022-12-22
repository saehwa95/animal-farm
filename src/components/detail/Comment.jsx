import React, { useState, useEffect } from 'react';
import TextBox from '../../elements/TextBox';
import Wrapper from '../../elements/Wrapper';
import InnerBox from '../../elements/InnerBox';
import SmPrimaryBtn from '../../elements/SmPrimaryBtn';
import SmSecondaryBtn from '../../elements/SmSecondaryBtn'
import { __getComments, __updateComments } from "../../redux/modules/commentSlice"
import { useDispatch, useSelector } from 'react-redux';


const Comment = ({postId}) => {
  const {comments, isloading, error} = useSelector((state)=> state.commentsSlice);
  const dispatch = useDispatch();

  console.log(postId);

  useEffect(()=> {
    dispatch(__getComments({postId}));
  },[]);
  
  const updateHandler = (nickname) => {
    dispatch(__updateComments({nickname}));
  }

  // const {}
  console.log(comments);

  return (
    <InnerBox width="100%" flexDirection="column" >
      {comments?.map((comment, index) => {
        return <InnerBox width="100%" borderBottom="1px solid rgba(0, 0, 0, 0.3)" key={index}>
                <InnerBox alignItems="center">{comment.nickname}</InnerBox>
                <InnerBox alignItems="center">{comment.comment}</InnerBox>
                <SmPrimaryBtn onClick={() => updateHandler(comment.nickname)}>수정</SmPrimaryBtn>
                <SmSecondaryBtn>삭제</SmSecondaryBtn>
              </InnerBox>
      })}
    </InnerBox>
    // {/* <InnerBox justifyContent="flex-end" width="15%" padding="0">
    //   <SmPrimaryBtn>수정</SmPrimaryBtn>
    //   <SmSecondaryBtn>삭제</SmSecondaryBtn>
    // </InnerBox> */}
  );
};

export default Comment;