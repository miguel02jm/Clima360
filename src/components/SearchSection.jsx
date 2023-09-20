import React from "react";
import InputComponent from "./InputComponent";
import TodayWeatherComponent from "./MainWeatherInfoComponent";
import "../styles/SearchSection.css";

function SearchSection({
  isDarkMode,
  dataWeather,
  cityName,
  dayOfWeek,
  dayOfMonth,
  monthName,
  handleSubmit,
  handleChangeCity,
}) {
  return (
    <div
      className={`container ${
        isDarkMode ? "custom-col-dark" : "custom-col-light"
      } col-md-3 d-flex flex-column`}
      style={{ minHeight: "100vh" }}
    >
      <InputComponent
        isDarkMode={isDarkMode}
        handleChangeCity={handleChangeCity}
        handleSubmit={handleSubmit}
      />

      <TodayWeatherComponent dataWeather={dataWeather} />

      <div className="container d-flex flex-column align-items-center">
        <p className="text-secondary">
          {dayOfWeek}, {dayOfMonth} {monthName}
        </p>
        {cityName ? (
          <p className="text-secondary">{cityName}</p>
        ) : (
          <p className="text-secondary">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default SearchSection;
