import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  errorMessage: "",
};

//Thunk
//회원가입 POST
export const __postRegister = createAsyncThunk(
  "user/postRegister",
  async (payload, thunkAPI) => {
    const navigate = useNavigate();
    // console.log("제대로 들어오고 있니이?:", payload);
    try {
      const res = await axios.post(`http://localhost:3001/user`, payload);
      //window.alert, navigate
      console.log(res);
      console.log("여기 :");
      navigate("/Login");
      // if(res.data.result === true){
      //   window.alert("회원가입을 축하합니다!")
      //   navigate("/Login")
      // }else{
      //   window.alert("회원가입에 실패했습니다.")
      // }
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      //error alert
      window.alert("회원가입에 실패했습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ID 중복확인 POST
export const __postDupEmail = createAsyncThunk(
  "user/dupEmail",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const res = await axios.post(`http://localhost:3001/user`, payload);
      return thunkAPI.fulfillWithValue({ result: true });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//로그인 POST
export const __postLogin = createAsyncThunk(
  "user/postLogin",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`http://localhost:3001/user`, payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
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
      // console.log("state값은? :", state);
      state.isLoading = true;
    },
    [__postRegister.fulfilled]: (state) => {
      state.isLoading = false;
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
      state.user = action.payload;
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
