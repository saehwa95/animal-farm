import React, { useState } from "react";
import Wrapper from "../../elements/Wrapper";

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
        <button>로그인</button>
      </form>
      <button>회원가입</button>
    </Wrapper>
  );
};

export default LoginForm;
