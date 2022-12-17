import React, { useState } from "react";
import TextBox from "../../elements/TextBox";
import Wrapper from "../../elements/Wrapper";
import MdPrimaryBtn from "../../elements/MdPrimaryBtn";
import StHeader from "../../elements/StHeader";
import FormInput from "../../elements/FormInput";

const Write = () => {
  const [image, setImage] = useState(null);
  const handler = (e) => {
    const i = e.target.files[0];
    setImage(URL.createObjectURL(i));
  };
  console.log(image);
  return (
    <>
      <StHeader></StHeader>
      <Wrapper>
        <label onChange={handler}>
          <input type="file" />
          <button>추가하기</button>
          <img src={image} />
        </label>
        <TextBox></TextBox>
        <MdPrimaryBtn>등록하기</MdPrimaryBtn>
        <FormInput></FormInput>
      </Wrapper>
    </>
  );
};

export default Write;
