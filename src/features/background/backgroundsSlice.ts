import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadBackgrounds = createAsyncThunk(
  "backgrounds/loadBackgrounds",
  async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?count=10&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`,
      {
        headers: {
          acceptVersion: "v1",
        },
      }
    );
    const json = await response.json();
    return json;
  }
);

const options = {
  name: "backgrounds",
  initialState: {
    backgrounds: [],
    isLoadingBackgrounds: false,
    failedToLoadBackgrounds: false,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(loadBackgrounds.pending, (state: any) => {
        state.isLoadingBackgrounds = true;
        state.failedToLoadBackgrounds = false;
      })
      .addCase(loadBackgrounds.fulfilled, (state: any, action: any) => {
        state.isLoadingBackgrounds = false;
        state.failedToLoadBackgrounds = false;
        state.backgrounds = action.payload;
      })
      .addCase(loadBackgrounds.rejected, (state: any) => {
        state.isLoadingBackgrounds = false;
        state.failedToLoadBackgrounds = true;
      });
  },
};

const backgroundsSlice = createSlice(options);

export const selectBackgrounds = (state: any) => state.backgrounds.backgrounds;

export default backgroundsSlice.reducer;
