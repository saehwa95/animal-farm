import React from 'react';
import styled from 'styled-components';
import PostDetail from '../../pages/PostDetail';
import Card from '../../elements/Card';

const PostContainer  = ({post}) => {
  console.log(post);
  return (
    <PostDetailContainer>
      <Card post={post}/>
      <Content>{post.text}</Content> 
    </PostDetailContainer>
  );
};

const PostDetailContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const Content = styled.div`
  width: 590px;
  height: 568px;
  background-color: #fff;

  color: #000;
  padding: 16px;
`;

export default PostContainer;