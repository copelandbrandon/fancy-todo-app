import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  loadWeatherData,
  selectWeatherData,
} from "../../features/weather/weatherSlice";
import { useEffect } from "react";
import "./WeatherWidget.css";
import cloudImg from "../../assets/cloudImg.png";

export const WeatherWidget = () => {
  const dispatch = useAppDispatch();
  const weatherData = useAppSelector(selectWeatherData);

  useEffect(() => {
    dispatch(loadWeatherData());
  }, [dispatch]);

  console.log(weatherData);

  return (
    <div className="weather-widget-container">
      <img className="weather-widget-icon" src={cloudImg} alt="cloud.png" />
      <div className="text-group">
        <p className="weather-widget-temp">{weatherData?.main?.temp}&#176;</p>
        <p className="weather-widget-description">
          {weatherData.weather && weatherData?.weather[0]?.main}
        </p>
      </div>
    </div>
  );
};
