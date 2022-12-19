import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "X-Custom-Header": "foobar" },
  timeout: 10000,
});
const initialState = {
  posts: [
    {
      imageUrl: [],
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
    //console.log(payload);
    // for (let entries of payload.formData.keys()) {
    //   console.log("keys in slice ", entries);
    // }
    // for (let entries of payload.formData.values()) {
    //   console.log("keys in slice ", entries);
    // }

    // console.log("저장", payload);
    try {
      //console.log("dddd");
      const postdata = await instance.post(
        "http://localhost:3001/posts",
        payload.formData
      );
      return postdata.data;
    } catch (error) {
      console.log(error);
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
      state.posts = action.payload;
      state.isLoading = false;
    },
    [__addPosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
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
