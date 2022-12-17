import React from "react";
import Wrapper from "../../elements/Wrapper";
import FormInput from "../../elements/FormInput";
import SmSecondaryBtn from "../../elements/SmSecondaryBtn";
import LgPrimaryBtn from "../../elements/LgPrimaryBtn";

const RegisterForm = () => {
  return (
    <Wrapper>
      <form>
        <div>
          <span>이메일</span>
          <div>
            <FormInput type="email" placeholder="이메일을 입력해주세요."/>
            <SmSecondaryBtn>중복확인</SmSecondaryBtn>
          </div>
        </div>
        <div>
          <span>닉네임</span>
          <div>
            <FormInput type="text" />
          </div>
        </div>
        <div>
          <span>패스워드</span>
          <div>
            <FormInput type="password" />
          </div>
        </div>
        <div>
          <span>패스워드 확인</span>
          <div>
            <FormInput type="password" />
          </div>
        </div>
        <LgPrimaryBtn>회원가입 완료</LgPrimaryBtn>
      </form>
    </Wrapper>
  );
};

export default RegisterForm;
