import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextBox from "../../elements/TextBox";
import Wrapper from "../../elements/Wrapper";
import MdPrimaryBtn from "../../elements/MdPrimaryBtn";
import { __addPosts } from "../../redux/modules/postsSlice";

const Write = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [image, setImage] = useState([]);
  const [img, setImg] = useState([]);

  //text input
  const inputHandler = (e) => {
    const value = e.target.value;
    setInput({ ...input, text: value });
  };

  //이미지 리더
  const onChangeSelectImages = async (e) => {
    const img = e.target.files;

    let fileURLs = [];
    let filesLength = img.length > 5 ? 5 : img.length;
    for (let i = 0; i < filesLength; i++) {
      let file = img[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setImg([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }

    setImage([...img]);
  };

  //등록하기
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("text", input.text);
    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }
    dispatch(__addPosts(formData));
  };

  return (
    <>
      <Wrapper>
        <Stform>
          <ImgBox>
            {img.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  width="240px"
                  height="240px"
                  object-fit="cover"
                />
              </div>
            ))}
          </ImgBox>
          <ImgButton For="file" onChange={onChangeSelectImages}>
            사진 첨부하기
            <input
              type="file"
              multiple
              accept="image/*"
              name="images"
              style={{ display: "none" }}
            />
          </ImgButton>
          <TextBox
            onChange={inputHandler}
            width="100%"
            height="240px"
            type="text"
            name="text"
            value={input.text}
          ></TextBox>
          <div style={{ margin: "20px" }}>
            <MdPrimaryBtn onClick={onSubmitHandler}>등록하기</MdPrimaryBtn>
          </div>
        </Stform>
      </Wrapper>
    </>
  );
};

const Stform = styled.form`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;

const ImgBox = styled.div`
  display: flex;
  gap: 8px;
`;

const ImgButton = styled.label`
  background-color: #fff;
  font-weight: bold;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;

export default Write;
