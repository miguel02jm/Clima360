import { useState, useEffect } from "react";
import "../styles/WeatherApp.css";
import fetchWeather from "../helpers/fetchWeather.js";
import useGeolocation from "../helpers/useGeolocation.js";
import useTime from "../helpers/useTime.js";

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

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 0) fetchWeather(city, setDataWeather);
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="custom-col col-md-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter location"
                value={city}
                onChange={handleChangeCity}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>

          <div className="container-fluid mt-2">
            {dataWeather && (
              <div className="row flex-column">
                <div key={dataWeather.city.id}>
                  <div className="col">
                    <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={`https://openweathermap.org/img/wn/${dataWeather.list[0].weather[0].icon}@2x.png`}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                      <h1>{parseInt(dataWeather.list[0].main.temp)}ºC</h1>
                    </div>
                  </div>

                  <div className="col">
                    <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                      <h1>{dataWeather.list[0].weather[0].description}</h1>
                    </div>
                  </div>

                  <p className="text-white">
                    {dayOfWeek}, {dayOfMonth} {monthName}
                  </p>
                  {cityName ? (
                    <p className="text-white">{cityName}</p>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="custom-col2 col-md-9">
          <div className="container-fluid mt-2">
            {dataWeather && (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pt-3">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="col">
                    <div className="container custom-col-days text-white">
                      <div>{hours[index]}</div>
                      <img
                        src={`https://openweathermap.org/img/wn/${dataWeather.list[index].weather[0].icon}@2x.png`}
                      />
                      <div>
                        {parseInt(dataWeather.list[index].main.temp_max)}ºC
                      </div>
                      <div>
                        {parseInt(dataWeather.list[index].main.temp_min)}ºC
                      </div>

                      <div>{dataWeather.list[0].pop}%</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
            <h3 className="mt-3 text-white">Relevant Parameters</h3>
          </div>
          <div className="container-fluid mt-2">
            {dataWeather && (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
                <div key={1} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Precipitation Probability</h5>
                    <h1>{dataWeather.list[0].pop * 100}%</h1>
                  </div>
                </div>

                <div key={2} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Humidity</h5>
                    <h1>{dataWeather.list[0].main.humidity}%</h1>
                  </div>
                </div>

                <div key={3} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Wind Speed</h5>
                    <h1>{dataWeather.list[0].wind.speed} metre/sec</h1>
                  </div>
                </div>

                <div key={4} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Air Pressure</h5>
                    <h1>{dataWeather.list[0].main.pressure} mb</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
