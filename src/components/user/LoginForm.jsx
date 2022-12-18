import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../../elements/Wrapper";
import LgPrimaryBtn from "../../elements/LgPrimaryBtn";
import LgSecondaryBtn from "../../elements/LgSecondaryBtn";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const loginSubmitHandler = (e) => {
    e.preventDefault();
  };

  const loginOnchangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  return (
    <Wrapper>
      <form onSubmit={loginSubmitHandler} style={{ margin: "0 0 20px 10px" }}>
        <div>
          <label>
            <span>이메일</span>
            <div>
              <StInput
                type="email"
                placeholder="이메일을 입력해주세요."
                name="email"
                value={loginInput.email}
                onChange={loginOnchangeHandler}
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            <span>비밀번호</span>
            <div>
              <StInput
                type="password"
                placeholder="비밀번호는 4글자 이상으로 작성해주세요."
                name="password"
                value={loginInput.password}
                onChange={loginOnchangeHandler}
              />
            </div>
          </label>
        </div>
        <LgPrimaryBtn>로그인</LgPrimaryBtn>
      </form>
      <Link to={`/register`}>
        <LgSecondaryBtn>회원가입</LgSecondaryBtn>
      </Link>
    </Wrapper>
  );
};

export default LoginForm;

const StInput = styled.input`
  width: 294px;
  height: 55px;
  border-radius: 5px;
  border: 1px solid #cecece;
  margin: 10px 10px 20px 0;
`;
