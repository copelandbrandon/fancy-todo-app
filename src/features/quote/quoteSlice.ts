import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadQuote = createAsyncThunk("quote/loadQuote", async () => {
  const response = await fetch("https://quotes.rest/qod");
  const json = await response.json();
  return json;
});

const options = {
  name: "quote",
  initialState: {
    isLoadingQuote: false,
    failedToLoadQuote: false,
    quote: {},
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(loadQuote.pending, (state: any) => {
        state.isLoadingQuote = true;
        state.failedToLoadQuote = false;
      })
      .addCase(loadQuote.fulfilled, (state: any, action: any) => {
        state.isLoadingQuote = false;
        state.failedToLoadQuote = false;
        state.quote = action.payload;
      })
      .addCase(loadQuote.rejected, (state: any) => {
        state.isLoadingQuote = false;
        state.failedToLoadQuote = true;
      });
  },
};

export const selectQuote = (state: any) => state.quote.quote;

const quoteSlice = createSlice(options);

export default quoteSlice.reducer;
