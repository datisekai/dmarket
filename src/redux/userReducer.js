import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: undefined };
const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    deleteUser: (state, action) => {
      return { ...state, user: undefined };
    },
  },
});

export const { setUser,deleteUser } = userReducer.actions;

export default userReducer.reducer;
