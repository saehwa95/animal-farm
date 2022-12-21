import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextButton from "../elements/TextButton";
import { __logout } from "../redux/modules/userSlice";

const Header = () => {
  const user = useSelector((state) => state.userSlice.nickname);
  const isLogin = useSelector((state) => state.userSlice.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutBtn = (e) => {
    e.preventDefault();
    dispatch(__logout({isLogin}));
    localStorage.clear();
    navigate(`/`);
  };

  return isLogin ? (
    <StHeader>
      <StNav>
        <div>
          <Link to={`/`}>
            <TextButton>동물농장</TextButton>
          </Link>
        </div>
        <div>
          <span>{user.nickname}님 환영합니다.</span>|
          <TextButton onClick={logoutBtn}>로그아웃</TextButton>
        </div>
      </StNav>
    </StHeader>
  ) : (
    <StHeader>
      <StNav>
        <div>
          <Link to={`/`}>
            <TextButton>동물농장</TextButton>
          </Link>
        </div>
        <div>
          <Link to={`/login`}>
            <TextButton>로그인</TextButton>
          </Link>
          |
          <Link to={`/register`}>
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
