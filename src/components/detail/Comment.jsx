import React from 'react';
import MdPrimaryBtn from '../../elements/MdPrimaryBtn';
import TextBox from '../../elements/TextBox';
import Wrapper from '../../elements/Wrapper';
import InnerBox from '../../elements/InnerBox';
import SmPrimaryBtn from '../../elements/SmPrimaryBtn';
import SmSecondaryBtn from '../../elements/SmSecondaryBtn'

const Comment = () => {
  return (
  <>
    <InnerBox width="80%" borderBottom="1px solid rgba(0, 0, 0, 0.3)">
      <InnerBox alignItems="center">Nickname</InnerBox>
      <InnerBox alignItems="center">고양이 갖고싶어요!</InnerBox>
      {/* <div>Nickname</div>
      <div>고양이 갖고싶어요!</div> */}
    </InnerBox>
    <InnerBox justifyContent="flex-end" width="15%"  padding="0">
      <SmPrimaryBtn>수정</SmPrimaryBtn>
      <SmSecondaryBtn>삭제</SmSecondaryBtn>
    </InnerBox>
  </>
  );
};

export default Comment;