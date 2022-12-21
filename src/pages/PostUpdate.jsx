import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextBox from "../elements/TextBox";
import Wrapper from "../elements/Wrapper";
import MdPrimaryBtn from "../elements/MdPrimaryBtn";
import { __addPosts } from "../redux/modules/postsSlice";
import { useParams } from "react-router-dom";

const PostUpdate = () => {
  const dispatch = useDispatch();
  //const [input, setInput] = useState("");
  const [image, setImage] = useState([]);
  //const [img, setImg] = useState([]);
  const [retext, setRetext] = useState("");
  const state = useSelector((state) => state.postsSlice);
  console.log(state);
  const params = useParams(state.posts.postId);
  console.log(params);

  // 원본 텍스트 내용
  useEffect(() => {});

  //수정된 내용 담기
  const contentChangeHandler = (e) => {
    setRetext(e.target.value);
  };

  //등록하기
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("text", retext.text);
    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }
    dispatch(__addPosts(formData));
  };

  useEffect(() => {
    dispatch(getData(postId));
  }, [dispatch, postId]);

  return (
    <>
      <Wrapper>
        <Stform>
          {state.text}
          {/* <ImgBox>
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
          </ImgBox> */}
          {/* <ImgButton For="file" onChange={onChangeSelectImages}>
            사진 첨부하기
            <input
              type="file"
              multiple
              accept="image/*"
              id="fileUpload"
              name="images"
              style={{ display: "none" }}
            />
          </ImgButton> */}
          <TextBox
            onChange={contentChangeHandler}
            width="100%"
            height="240px"
            type="text"
            name="text"
            value={retext.text}
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

export default PostUpdate;
