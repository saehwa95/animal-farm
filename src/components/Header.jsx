import React from "react";
import StHeader from '../elements/StHeader';
import { Link } from 'react-router-dom';

const Header = () => {
  return <StHeader>
    <div>
      <span>동물농장</span>
    </div>
    <div>
      <Link to={`/login`}>
        <button >로그인</button>
      </Link>
      <Link  to={`/register`}>
        <button>회원가입</button>
      </Link>
    </div>
  </StHeader>;
};

export default Header;
