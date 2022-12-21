import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_FRONT_BASE_URL,
  timeout: 2500,
  header: {
    "Authorization" : localStorage.getItem("token")
  }
});

const init = {
  comments:{},
};

// postId, user id
export const getComments = createAsyncThunk(
  "getComments",
  async ( payload, thunkAPI) => {
    try{
      const response = await instance.get("/comments")
      const result = response.data;
    } catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const commentsSlice = createSlice({
 name: "commentSlice",
 initialState: "",
 reducers: {

 },
 extraReducers:{

 }
},
)

export const { } = commentsSlice.actions;
export default commentsSlice.reducer;