import React, { useState } from "react";
import Wrapper from "../../elements/Wrapper";
import LgPrimaryBtn from "../../elements/LgPrimaryBtn";
import LgSecondaryBtn from "../../elements/LgSecondaryBtn";

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const loginSubmitHandler = (e) => {
    e.preventDefault();
  };

  const loginOnchangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
    console.log(value)
  };

  return (
    <Wrapper>
      <form onSubmit={loginSubmitHandler}>
        <div>
          <span>이메일</span>
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            name="email"
            value={loginInput.email}
            onChange={loginOnchangeHandler}
            required
          />
        </div>
        <div>
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호는 4글자 이상으로 작성해주세요."
            name="password"
            value={loginInput.password}
            onChange={loginOnchangeHandler}
            required
          />
        </div>
        <LgPrimaryBtn>로그인</LgPrimaryBtn>
      </form>
      <LgSecondaryBtn>회원가입</LgSecondaryBtn>
    </Wrapper>
  );
};

export default LoginForm;
