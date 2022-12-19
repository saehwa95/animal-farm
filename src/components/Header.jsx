import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextButton from '../elements/TextButton';

const Header = () => {
  return (
    <StHeader>
      <StNav>
        <div>
          <Link to={`/`}>
            <TextButton>동물농장</TextButton>
          </Link>
        </div>
        <div>
          <Link to={`/login`}>
            <TextButton >로그인</TextButton>
          </Link>
          |
          <Link  to={`/register`}>
            <TextButton>회원가입</TextButton>
          </Link>
        </div>
      </StNav>
    </StHeader>
  );
};

const StNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StHeader = styled.header`
  width: 1200px;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
