import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initalState = {
  posts: [
    {
      text: "하이향하ㅓ아허앟",
      img: [
        ((imgfile1 =
          "https://velog.velcdn.com/images/hiak/post/74844262-126d-4d24-b5e1-7e04d0c78bdb/image.png"),
        (imgfile2 =
          "https://velog.velcdn.com/images/hiak/post/74844262-126d-4d24-b5e1-7e04d0c78bdb/image.png"),
        (imgfile3 =
          "https://velog.velcdn.com/images/hiak/post/74844262-126d-4d24-b5e1-7e04d0c78bdb/image.png"),
        (imgfile4 =
          "https://velog.velcdn.com/images/hiak/post/74844262-126d-4d24-b5e1-7e04d0c78bdb/image.png"),
        (imgfile5 =
          "https://velog.velcdn.com/images/hiak/post/74844262-126d-4d24-b5e1-7e04d0c78bdb/image.png")),
      ],
    },
  ],
};

//게시글 조회
export const __getPosts = createAsyncThunk(
  "GET_POST",
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

//리듀서
export const postsSlice = createSlice({
  name: "posts",
  initalState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.todolist = action.payload;
      state.isLoading = false;
    },
    [__getTodos.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getdata } = postsSlice.actions;
export default postsSlice.reducer;
