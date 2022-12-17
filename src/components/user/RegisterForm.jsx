import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../../elements/Wrapper";
import LgPrimaryBtn from "../../elements/LgPrimaryBtn";

const RegisterForm = () => {
  const [registerInput, setRegisterInput] = useState({
    email: "",
    nickName: "",
    password: "",
    confirmPassword: "",
  });

  const registerSubmitHandler = (e) => {
    e.preventDefault();
  };

  const registerOnchangeInput = (e) => {
    const { name, value } = e.target;
    setRegisterInput({ ...registerInput, [name]: value });
  };

  const registerBtn = () => {};

  return (
    <Wrapper>
      <RegisterWrapper>
        <form onSubmit={registerSubmitHandler}>
          <div>
            <span>이메일</span>
            <div>
              <input
                type="email"
                placeholder="이메일을 입력해주세요."
                name="email"
                value={registerInput.email}
                onChange={registerOnchangeInput}
                required
              />
              <button>중복확인</button>
            </div>
          </div>
          <div>
            <span>닉네임</span>
            <div>
              <input
                type="text"
                placeholder="닉네임은 영문과 숫자를 혼합하여 작성해주세요."
                name="nickName"
                value={registerInput.nickName}
                onChange={registerOnchangeInput}
                required
              />
            </div>
          </div>
          <div>
            <span>패스워드</span>
            <div>
              <input
                type="password"
                placeholder="비밀번호는 4글자 이상으로 작성해주세요."
                name="password"
                value={registerInput.password}
                onChange={registerOnchangeInput}
                required
              />
            </div>
          </div>
          <div>
            <span>패스워드 확인</span>
            <div>
              <input
                type="password"
                placeholder="위에서 작성한 비밀번호를 한 번 더 작성해주세요."
                name="confirmPassword"
                value={registerInput.confirmPassword}
                onChange={registerOnchangeInput}
                required
              />
            </div>
          </div>
          <LgPrimaryBtn onClick={registerBtn}>회원가입 완료</LgPrimaryBtn>
        </form>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default RegisterForm;

const RegisterWrapper = styled.div``;
