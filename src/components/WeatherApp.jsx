import { useState, useEffect } from "react";
import SearchSection from "./SearchSection";
import ParametersSection from "./ParametersSection";
import fetchWeather from "../helpers/fetchWeather.js";
import useGeolocation from "../helpers/useGeolocation.js";
import useTime from "../helpers/useTime.js";
import "../styles/WeatherApp.css";

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

  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    return savedDarkMode !== null ? savedDarkMode : false;
  });

  useEffect(() => {
    const fetchData = async () => {
      if (cityName && cityName.length > 0) {
        fetchWeather(cityName, setDataWeather);
      }
    };

    fetchData();
  }, [cityName]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 0) fetchWeather(city, setDataWeather);
  };

  return (
    <div className="container-fluid custom-container">
      <div className="row">
        <SearchSection
          isDarkMode={isDarkMode}
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
        ></ParametersSection>
      </div>
    </div>
  );
};
