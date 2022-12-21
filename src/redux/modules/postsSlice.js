import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import commentsSlice from "./commentSlice";

const instance = axios.create({
  baseURL: "http://43.201.27.229/",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  timeout: 1000,
});

const initialState = {
  posts: [
    {
      imagesUrl: [],
      text: "",
    },
  ],
  isloading: false,
  error: false,
};

//게시글 조회
export const __getPosts = createAsyncThunk(
  "GET_POSTS",
  async (paylode, thunkAPI) => {
    try {
      const getdata = await axios.get();
      return getdata.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 저장
export const __addPosts = createAsyncThunk(
  "ADD_POSTS",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");

    try {
      payload.append("token", token);
      const response = await instance.post("/api/posts", payload);
      console.log(response.data.message);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 삭제
export const __deletePosts = createAsyncThunk(
  "DELETE_POSTS",
  async (payload, thunkAPI) => {
    try {
      const deletedata = await axios.delete();
      return deletedata.data;
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

//리듀서
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //get
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [__getPosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //post
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    //delete
    [__deletePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [__deletePosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
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

export const { getdata, postdata, deletedata, updatedata } = postsSlice.actions;
export default postsSlice.reducer;
