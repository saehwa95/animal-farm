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

  const [input, setInput] = useState("");
  const [image, setImage] = useState([]);

  const inputHandler = (e) => {
    const value = e.target.value;
    setInput({ ...input, text: value });
  };

  const onChangeSelectImages = (e) => {
    const img = e.target.files;
    console.log(img);
    // let imageUrlList = []; //현재 MYIMAGE 복사

    // for (let i = 0; i < imageUrlList.length; i++) {
    //   const imageUrl = URL.createObjectURL(imageUrlList[i]);
    //   imageUrlList.push(imageUrl);
    // }

    // if (imageUrlList.length > 5) {
    //   imageUrlList = imageUrlList.slice(0, 5);
    // }
    // console.log("In onChangeSelectImages",imageUrlList);
    setImage([...img]);
    // if (image === null || image.length !== 5) {
    //   alert("이미지는 5장 넣어주세요");
    //   return;
    // }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("input", input.text);
    formData.append("images", image);

    console.log(formData);
    console.log(formData.images);

    for (let entries of formData.keys()) {
      console.log("keys ", entries);
    }
    for (let entries of formData.values()) {
      console.log("values ", entries);
    }

    dispatch(__addPosts({ formData: formData }));
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
