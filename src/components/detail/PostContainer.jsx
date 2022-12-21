import React from 'react';
import styled from 'styled-components';
import PostDetail from '../../pages/PostDetail';
import TextBox from '../../elements/TextBox';
import Carousel from '../../elements/carousel/Carousel'

const PostContainer = () => {
  return (
    <PostDetailContainer>
      <Carousel/>
        <TextBox width="590px" height="568px"/>
    </PostDetailContainer>
  );
};

const PostDetailContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direciton: row;
  justify-content: space-between;
  gap: 20px;
`;

export default PostContainer;