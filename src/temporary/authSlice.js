import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
    try {
      const user = localStorage.getItem("user");
      if (!user || user === "undefined" || user === "null") return null; // Handle invalid values
      return JSON.parse(user);
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      localStorage.removeItem("user"); // Remove corrupted data
      return null;
    }
  };  
  
  const initialState = {
    user: getUserFromLocalStorage(), 
    token: localStorage.getItem("token") || null,
    isLoading: false,
    error: null,
  };  

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // ✅ Save user
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // ✅ Save user
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user"); // ✅ Remove user
      localStorage.removeItem("token");
    },    
  },
});

export const { loginStart, loginSuccess, loginFailure, registerSuccess, logout } = authSlice.actions;
export default authSlice.reducer;