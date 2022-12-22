import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_FRONT_BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  timeout: 10000,
});

const initialState = {
  posts: [
    {
      postId: 0,
      text: "",
      created_at: "",
      userId: "",
      imageUrl: [],
    },
  ],
  isloading: false,
  error: false,
};

//게시글 조회
export const __getPosts = createAsyncThunk(
  "postsSlice/getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/api/posts");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getUpdatePost = createAsyncThunk(
  "postsSlice/getUpdatePost",
  async (payload, thunkAPI) => {
    console.log(payload.postId.id);
    try {
      const { data } = await instance.get(`/api/posts/${payload.postId.id}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetailPost = createAsyncThunk(
  "postsSlice/getDetailPost",
  async (payload, thunkAPI) => {
    console.log(typeof payload.postId);
    try {
      const { data } = await instance.get(`/api/posts/${payload.postId}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      window.alert(error.response.data.errorMessage);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 삭제
export const __deletePosts = createAsyncThunk(
  "postsSlice/deletePost",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await instance.delete(`/api/posts/${payload.id}`);
      window.alert(response.data.message);
      window.location.replace("/home");
      console.log(response.data.message);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.errorMessage);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 저장
export const __addPosts = createAsyncThunk(
  "postsSlice/addPosts",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await instance.post("/api/posts", payload);
      window.alert(response.data.message);
      window.location.replace("/home");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.errorMessage);
      return thunkAPI.rejectWithValue(error.response.data.errorMessage);
    }
  }
);

export const __UpdatePosts = createAsyncThunk(
  "postsSlice/UpdatePost",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.put(
        `/api/posts/${payload.postId.id}`,
        payload.formData
      );
      window.alert(response.data.message);
      window.location.replace("/home");
      return thunkAPI.fulfillWithValue(updatedata.data);
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.errorMessage);
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
    [__getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = [...payload.data];
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    //getDetailPost
    [__getDetailPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getDetailPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      // console.log(payload);
      state.posts = {...payload.data};
      // console.log(state.posts);
    },
    [__getDetailPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
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
