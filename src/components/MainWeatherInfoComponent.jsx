import React from "react";

function TodayWeatherComponent({ dataWeather }) {
  return (
    <div className="container flex-grow-1">
      {dataWeather !== null && dataWeather !== undefined ? (
        <div
          key={dataWeather.city.id}
          className="d-flex flex-column align-items-center"
        >
          <h2 className="text-secondary mt-5">{dataWeather.city.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${dataWeather.list[0].weather[0].icon}@2x.png`}
            width="175"
          />
          <div className="d-flex align-items-center">
            <h1 className="display-1">
              {parseInt(dataWeather.list[0].main.temp)}
            </h1>
            <h1>ºC</h1>
          </div>
          <h2 className="text-secondary mt-5">
            {dataWeather.list[0].weather[0].description}
          </h2>
        </div>
      ) : (
        <div className="container d-flex align-items-center justify-content-center mt-5">
          <h2 className="text-secondary mt-5">No info</h2>
        </div>
      )}
    </div>
  );
}

export default TodayWeatherComponent;
