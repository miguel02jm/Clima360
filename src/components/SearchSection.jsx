import React from "react";
import "../styles/SearchSection.css";

function SearchSection({
  isDarkMode,
  city,
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
      } col-md-3`}
    >
      <form onSubmit={handleSubmit}>
        <div className="input-group mt-3">
          <input
            type="text"
            className={`form-control ${
              isDarkMode ? "custom-input-dark" : "custom-input-light"
            }`}
            placeholder="Enter location"
            value={city}
            onChange={handleChangeCity}
          />
          <button
            className={`btn ${isDarkMode ? "btn-warning" : "btn-dark"}`}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div className="container-fluid mt-2">
        {dataWeather && (
          <div className="row flex-column">
            <div
              key={dataWeather.city.id}
              className="col d-flex flex-column align-items-center justify-content-center"
            >
              <h2 className="text-secondary mt-5">{dataWeather.city.name}</h2>
              <img
                src={`https://openweathermap.org/img/wn/${dataWeather.list[0].weather[0].icon}@2x.png`}
                width="175"
              />

              <div className="d-flex align-items-center justify-content-center">
                <h1 className=" display-1 number-counter">
                  {parseInt(dataWeather.list[0].main.temp)}
                </h1>
                <h1>ºC</h1>
              </div>

              <h2 className="text-secondary mt-5">
                {dataWeather.list[0].weather[0].description}
              </h2>
            </div>
            <div className="container mt-5">
              <div className="row mt-5">
                <div className="col d-flex flex-column align-items-center justify-content-center">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchSection;
