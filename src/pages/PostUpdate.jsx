import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextBox from "../elements/TextBox";
import Wrapper from "../elements/Wrapper";
import MdPrimaryBtn from "../elements/MdPrimaryBtn";
import MdSecondaryBtn from "../elements/MdSecondaryBtn";
import { useParams, useNavigate } from "react-router-dom";
import {
  __addPosts,
  __getDetailPost,
  __UpdatePosts,
} from "../redux/modules/postsSlice";

const PostUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState([]);
  const [img, setImg] = useState([]);
  const [retext, setRetext] = useState("");
  const { posts } = useSelector((state) => state.postsSlice);
  const postId = useParams(posts.postId);
  const { text } = posts[0] ?? {
    text: "",
  };

  useEffect(() => {
    dispatch(__getDetailPost({ postId: postId }));
  }, []);

  useEffect(() => {
    setRetext(text);
  }, [text]);

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
    formData.append("text", retext);
    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }
    dispatch(__UpdatePosts({ postId: postId, formData }));
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
            value={retext}
          />
          <ButtonWrap>
            <MdSecondaryBtn
              onClick={() => {
                navigate(`/detail/${postId.id}`);
              }}
            >
              취소하기
            </MdSecondaryBtn>
            <MdPrimaryBtn onClick={onSubmitHandler}>등록하기</MdPrimaryBtn>
          </ButtonWrap>
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
  margin: 20px 0 20px 0;
  text-align: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin: 20px auto;
  gap: 20px;
`;

export default PostUpdate;
