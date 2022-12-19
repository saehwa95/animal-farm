import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextBox from "../../elements/TextBox";
import Wrapper from "../../elements/Wrapper";
import MdPrimaryBtn from "../../elements/MdPrimaryBtn";
import { __addPosts } from "../../redux/modules/postsSlice";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //text_input
  const [input, setInput] = useState({ text: "" });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //img_input
  const [image, setImage] = useState([]);

  const onChangeSelectImages = (e) => {
    e.preventDefault();
    const img = e.target.files;
    const imageURLList = [...image]; //현재 MYIMAGE 복사
    for (let i = 0; i < imageURLList.length; i += 1) {
      console.log(img);
      const imageUrl = URL.createObjectURL(imageURLList[i]);
      imageURLList.push(imageUrl);
    }
    if (imageURLList.length > 5) {
      imageURLList = imageURLList.slice(0, 5);
    }
    setImage(imageURLList);

    console.log("img", e.target.files);
    if (image === null || image.length !== 5) {
      alert("이미지는 5장 넣어주세요");
      return setImage(img);
    }
  };
  console.log("setimg", image);

  const form = new FormData();
  for (let i = 0; i < image.length; i++) {
    console.log("imgi", image[i]);
    console.log("imgi", input);
    form.append("images", image[i]);
    form.append("text", input);
  }

  console.log("form", form.images);

  const onSubmitHandler = () => {
    dispatch(__addPosts({ formData: form }));
  };

  //navigate("/");

  return (
    <>
      <Wrapper>
        <Stform>
          {/* {image.map((image) => (
            <div key={image.id}>
              <img src={image} />
              <Delete onClick={() => handleDeleteImage(id)} />
            </div>
          ))} */}
          {image && <img src={image} alt="preview-img" />}
          <label htmlFor="input-file" onChange={onChangeSelectImages}>
            <input type="file" multiple accept="image/*" id="fileUpload" />
          </label>
          <TextBox
            onChange={inputHandler}
            width="1000px"
            height="240px"
            type="text"
            name="text"
            value={input.text}
          ></TextBox>
          <MdPrimaryBtn onClick={onSubmitHandler}>등록하기</MdPrimaryBtn>
        </Stform>
      </Wrapper>
    </>
  );
};

const Stform = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1200px;
`;
export default Write;
