import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../../elements/Wrapper";
import LgPrimaryBtn from "../../elements/LgPrimaryBtn";
import SmSecondaryBtn from "../../elements/SmSecondaryBtn";

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
      <form onSubmit={registerSubmitHandler}>
        <div>
          <label>
            <span>이메일</span>
            <div>
              <StInput
                type="email"
                placeholder="이메일을 입력해주세요."
                name="email"
                value={registerInput.email}
                onChange={registerOnchangeInput}
                required
              />
              <SmSecondaryBtn>중복확인</SmSecondaryBtn>
            </div>
          </label>
        </div>
        <div>
          <label>
            <span>닉네임</span>
            <div>
              <StInput
                type="text"
                placeholder="닉네임은 영문과 숫자를 혼합하여 작성해주세요."
                name="nickName"
                value={registerInput.nickName}
                onChange={registerOnchangeInput}
                required
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            <span>패스워드</span>
            <div>
              <StInput
                type="password"
                placeholder="비밀번호는 4글자 이상으로 작성해주세요."
                name="password"
                value={registerInput.password}
                onChange={registerOnchangeInput}
                required
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            <span>패스워드 확인</span>
            <div>
              <StInput
                type="password"
                placeholder="위에서 작성한 비밀번호를 한 번 더 작성해주세요."
                name="confirmPassword"
                value={registerInput.confirmPassword}
                onChange={registerOnchangeInput}
                required
              />
            </div>
          </label>
        </div>
        <LgPrimaryBtn onClick={registerBtn}>회원가입 완료</LgPrimaryBtn>
      </form>
    </Wrapper>
  );
};

export default RegisterForm;

const StInput = styled.input`
  width: 294px;
  height: 55px;
  border-radius: 5px;
  border: 1px solid #cecece;
  margin: 10px 10px 10px 0;
  
`;
