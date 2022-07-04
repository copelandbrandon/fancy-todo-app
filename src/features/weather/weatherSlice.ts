import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadWeatherData = createAsyncThunk(
  "weather/loadWeatherData",
  async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${51.049999}&lon=${-114.066666}&units=metric&appid=${
        process.env.REACT_APP_OPEN_WEATHER_ACCESS_TOKEN
      }`
    );
    const json = await response.json();
    return json;
  }
);

const options = {
  name: "weather",
  initialState: {
    isLoadingData: false,
    failedToLoadData: false,
    weatherData: {},
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(loadWeatherData.pending, (state: any) => {
        state.isLoadingData = true;
        state.failedToLoadData = false;
      })
      .addCase(loadWeatherData.fulfilled, (state: any, action: any) => {
        state.isLoadingData = false;
        state.failedToLoadData = false;
        state.weatherData = action.payload;
      })
      .addCase(loadWeatherData.rejected, (state: any) => {
        state.isLoadingData = false;
        state.failedToLoadData = true;
      });
  },
};

export const selectWeatherData = (state: any) => state.weather.weatherData;

const weatherSlice = createSlice(options);

export default weatherSlice.reducer;
