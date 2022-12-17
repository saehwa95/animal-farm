import React from 'react';
import Header from '../components/Header';
import MainContainer from '../elements/MainContainer';

const Layout = ({children}) => {
  return (
    <>
      <Header>동물농장</Header>
      <MainContainer>
        {children}
      </MainContainer>
    </>
  );
};

export default Layout;