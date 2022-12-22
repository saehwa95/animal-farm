import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextBox from "../elements/TextBox";
import Wrapper from "../elements/Wrapper";
import MdPrimaryBtn from "../elements/MdPrimaryBtn";
import { __addPosts, __getDetailPost } from "../redux/modules/postsSlice";
import { useParams } from "react-router-dom";

const PostUpdate = () => {
  const dispatch = useDispatch();
  //const [input, setInput] = useState("");
  const [image, setImage] = useState([]);
  const [img, setImg] = useState([]);
  const [retext, setRetext] = useState("");
  const { posts } = useSelector((state) => state.postsSlice);
  console.log(posts);

  const postId = useParams(posts.postId);
  console.log(postId);

  //text가 없을때 요청이 들어가지 않게 요청한다.
  const { text } = posts[0] ?? {
    text: "",
  };
  console.log(text);
  //원본 텍스트 내용
  useEffect(() => {
    dispatch(__getDetailPost({ postId: postId }));
  }, []);

  //수정된 내용 담기
  const contentChangeHandler = (e) => {
    setRetext(e.target.value);
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
    formData.append("text", retext.text);
    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }
    dispatch(__addPosts({ postId: postId, formData }));
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
              id="fileUpload"
              name="images"
              style={{ display: "none" }}
            />
          </ImgButton>
          <TextBox
            onChange={contentChangeHandler}
            width="100%"
            height="240px"
            type="text"
            name="text"
            value={text}
          />

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