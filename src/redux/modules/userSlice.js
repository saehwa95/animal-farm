import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initialstate 작성
const initialState = {
  user: [
    {
      nickname: "",
      userId: "",
    },
  ],
  dupCheck: false,
  isLoading: false,
  error: null,
  isLogin: false,
  isSignup: false,
};

//Thunk
//회원가입 POST
export const __postRegister = createAsyncThunk(
  "user/postRegister",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("http://43.201.27.229/api/signup", payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("회원가입에 실패했습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ID 중복확인 POST
export const __postDupEmail = createAsyncThunk(
  "user/dupEmail",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://43.201.27.229/api/signup/checkId/",
        payload
      );
      window.alert("사용 가능한 ID입니다.");
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("중복된 ID가 있습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//로그인 POST
export const __postLogin = createAsyncThunk(
  "user/postLogin",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("http://43.201.27.229/api/login", payload);
      localStorage.setItem("token", res.data.token);
      return thunkAPI.fulfillWithValue(res.data.token);
    } catch (error) {
      window.alert("가입하신 이메일, 비밀번호와 다릅니다!!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    //__postRegister
    [__postRegister.pending]: (state) => {
      state.isLoading = true;
    },
    [__postRegister.fulfilled]: (state) => {
      state.isLoading = false;
      state.isSignup = true;
    },
    [__postRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //__postDupEmail
    [__postDupEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [__postDupEmail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dupCheck = action.payload.result;
    },
    [__postDupEmail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //__postLogin
    [__postLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
