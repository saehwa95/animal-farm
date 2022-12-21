import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import commentsSlice from "./commentSlice";

const instance = axios.create({
  baseURL: "http://43.201.27.229/",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  timeout: 3000,
});


//게시글 조회
export const __getPosts = createAsyncThunk(
  "postsSlice/getPosts",
  async (payload, thunkAPI) => {
    try {
      const {data} = await instance.get("/api/posts");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 삭제
export const __deletePosts = createAsyncThunk(
  "DELETE_POSTS",
  async (payload, thunkAPI) => {
    console.log(payload);
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      // const response = await instance.delete(`/api/posts/${payload}`, token);
      const response = await instance.delete(`/api/posts/${payload}`);
      console.log(response.data.message);
      
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 수정
export const __UpdatePosts = createAsyncThunk(
  "UPDATE_POSTS",
  async (payload, thunkAPI) => {
    try {
      const updatedata = await axios.put();
      return updatedata.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initial = {
  posts: [
    {
      postId: "",
      text: "",
      created_at : "",
      userId: "",
      imagesUrl: [] 
    }
  ],
  isloading: false,
  error: false,
};

//리듀서
export const postsSlice2 = createSlice({
  name: "posts",
  initialState: initial,
  reducers: {
  },
  extraReducers: {
    //get
    [__getPosts.pending]: (state, action) => {
      console.log("now pending");
      // console.log("pending ", state.data);
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      console.log(state);
      state.posts = [...payload.data];
      console.log("fulfilled ", state.posts);
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  
    //delete
    [__deletePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__deletePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //update
    [__UpdatePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__UpdatePosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [__UpdatePosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { } = postsSlice2.actions;
export default postsSlice2.reducer;
