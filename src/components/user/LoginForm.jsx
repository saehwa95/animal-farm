import React, { useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../../elements/Wrapper";
import LgPrimaryBtn from "../../elements/LgPrimaryBtn";
import LgSecondaryBtn from "../../elements/LgSecondaryBtn";
import useValidation from "../../hooks/useValidation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __postLogin } from "../../redux/modules/userSlice";

const LoginForm = () => {
  const [email, emailCheck, setEmail] = useValidation("email");
  const [password, passwordCheck, setPassword] = useValidation("password");
  const isLogin = useSelector((state) => state.userSlice.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__postLogin({ email, password }));
  };

  useEffect(() => {
    if (!isLogin) return;
    if (isLogin) {
      alert("로그인 성공");
      navigate("/");
    }
  }, [isLogin]);

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
                value={email}
                onChange={setEmail}
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
                value={password}
                onChange={setPassword}
              />
            </div>
          </label>
        </div>
        <LgPrimaryBtn disabled={!emailCheck || !passwordCheck}>
          로그인
        </LgPrimaryBtn>
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
