import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";

const initialState = {
  profile: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get profile
export const getprofile= createAsyncThunk(
  "profile",
  async (thunkAPI) => {
    try {
      return await profileService.fetchprofile();
    } catch (error) {
      const message = error.response.data || error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getprofile.pending, (state) => {
        state.isLoading = true;
        state.message = "";
        
      })
      .addCase(getprofile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
        state.message = "";
      })

      .addCase(getprofile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        
      }) 
      ;
  },
});

export default profileSlice.reducer;
