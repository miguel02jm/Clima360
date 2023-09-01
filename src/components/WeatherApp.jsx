import { useState, useEffect } from "react";
import "../styles/WeatherApp.css";
import fetchWeather from "../helpers/fetchWeather.js";
import fetchInitialWeather from "../helpers/fetchInitialWeather.js";
import useGeolocation from "../helpers/useGeolocation.js";
import useTime from "../helpers/useTime.js";
import SearchSection from "./SearchSection";
import ParametersSection from "./ParametersSection";

export const WeatherApp = () => {
  const cityName = useGeolocation();
  const todayDate = useTime();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[todayDate.getDay()];
  const dayOfMonth = todayDate.getDate();
  const monthName = months[todayDate.getMonth()];

  const hours = [
    "In 0 hours",
    "In 3 hours",
    "In 6 hours",
    "In 9 hours",
    "In 12 hours",
  ];

  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (cityName && cityName.length > 0) {
        fetchInitialWeather(cityName, setDataWeather);
      }
    };

    fetchData();
  }, [cityName]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 0) fetchWeather(city, setDataWeather);
  };

  return (
    <div className="main-container">
      <div className="container-fluid custom-container">
        <div className="row vh-100">
          <SearchSection
            isDarkMode={isDarkMode}
            city={city}
            dataWeather={dataWeather}
            cityName={cityName}
            dayOfWeek={dayOfWeek}
            dayOfMonth={dayOfMonth}
            monthName={monthName}
            handleSubmit={handleSubmit}
            handleChangeCity={handleChangeCity}
          ></SearchSection>

          <ParametersSection
            isDarkMode={isDarkMode}
            dataWeather={dataWeather}
            toggleDarkMode={toggleDarkMode}
            hours={hours}
          ></ParametersSection>
        </div>
      </div>
    </div>
  );
};
