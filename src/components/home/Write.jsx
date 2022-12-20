import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextBox from "../../elements/TextBox";
import Wrapper from "../../elements/Wrapper";
import MdPrimaryBtn from "../../elements/MdPrimaryBtn";
import { __addPosts } from "../../redux/modules/postsSlice";
import axios from "axios";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [image, setImage] = useState([]);
  const [img, setImg] = useState([]);

  const inputHandler = (e) => {
    const value = e.target.value;
    setInput({ ...input, text: value });
  };

  const onChangeSelectImages = (e) => {
    const img = e.target.files;
    console.log(img);

    let fileURLs = [];

    let file;
    let filesLength = img.length > 5 ? 5 : img.length;

    for (let i = 0; i < filesLength; i++) {
      file = img[i];
      console.log("이미지", img);

      let reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        fileURLs[i] = reader.result;
        setImg([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
    setImage([...img]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(image);
    // console.log(image[0]);
    // for(let val of image) {
    //   console.log(val.name);
    // }
    let formData = new FormData();

    formData.append("input", input.text);

    for (let i = 0; i < image.length; i++) {
      console.log("image", image[i]);
    }

    for (let i = 0; i < image.length; i++) {
      formData.append("files", image[i]);
    }

    axios.post("http://localhost:3001/posts", {
      text: formData.get("input"),
      files: formData.getAll("files"),
    });
    // dispatch(__addPosts({ formData: formData }));
  };

  //navigate("/");

  return (
    <>
      <Wrapper>
        <Stform>
          <ImgBox>
            {console.log(image)}
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
              id="fileUpload"
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
        </Stform>
        <div style={{ margin: "20px" }}>
          <MdPrimaryBtn onClick={onSubmitHandler}>등록하기</MdPrimaryBtn>
        </div>
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
  border: 1px solid #cecece;
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
