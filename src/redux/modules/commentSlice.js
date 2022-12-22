import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_FRONT_BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  timeout: 10000,
});

const initialState = {
  comments: [
    {
      comment: "",
      commentsId: "",
      nickname: "",
      updatedAt: ""
    }
  ],
  isLoading: false,
  isUpdate: false,
  error: false,
};

export const __getComments = createAsyncThunk(
  "commentsSlice/getComments",
  async (payload, thunkAPI) => {
    try {
      const {data} = await instance.get(`/api/comments/${payload.postId}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      window.alert(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "commentsSlice/addComments",
  async (payload, thunkAPI) => {
    try {
      const {comment, postId} = payload;
      console.log(comment, postId);
      const {data} = await instance.post(`/api/comments/${postId}`, {comment});
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      window.alert(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComments = createAsyncThunk(
  "commentsSlice/updateComments",
  async (payload, thunkAPI) => {
    // try {
    console.log(payload);
    // const {data} = await instance.patch(`/api/comments/${}`);
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error);
    // }
  }
);

export const __deleteComments = createAsyncThunk(
  "commentsSlice/deleteComments",
  async (payload, thunkAPI) => {
    try {
      const postData = await instance.get("/posts");
      const result = postData.data.filter((e) => {
        return e.id === payload;
      });

      const commentsData = await instance.get("/comments");
      const postComments = commentsData.data.filter(
        (e) => e.postId === payload
      );

      const resultData = { ...result[0], comments: postComments };
      return thunkAPI.fulfillWithValue(resultData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
  },
  extraReducers: {
    //get
    [__getComments.pending]: (state, action) => {
      console.log("now pending");
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.comments = [...payload];
      console.log("fulfilled", state.comments);
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    //add
    [__addComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = [...payload];
      console.log("fulfilled ", state.comments);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    //update
    [__updateComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__updateComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    //delete
    [__deleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    [__deleteComments.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addComments, deleteComments, updateComments } =
  commentsSlice.actions;
export default commentsSlice.reducer;