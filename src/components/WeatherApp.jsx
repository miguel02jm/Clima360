import { useState, useEffect } from "react";
import "../styles/WeatherApp.css";
import fetchWeather from "../helpers/fetchWeather.js";
import fetchInitialWeather from "../helpers/fetchInitialWeather.js";
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

  useEffect(() => {
    const fetchData = async () => {
      if (cityName && cityName.length > 0) {
        fetchInitialWeather(cityName, setDataWeather);
      }
    };

    fetchData();
  }, [cityName]);

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 0) fetchWeather(city, setDataWeather);
  };

  return (
    <div className="container-fluid custom-container">
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
                <div
                  key={dataWeather.city.id}
                  className="col d-flex flex-column align-items-center justify-content-center"
                >
                  <h2 className="text-secondary mt-5">
                    {dataWeather.city.name}
                  </h2>
                  <img
                    src={`https://openweathermap.org/img/wn/${dataWeather.list[0].weather[0].icon}@2x.png`}
                    width="175"
                  />

                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="text-white display-1 number-counter">
                      {parseInt(dataWeather.list[0].main.temp)}
                    </h1>
                    <h1 className="text-white">ºC</h1>
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
        <div className="custom-col2 col-md-9">
          <div className="container-fluid mt-2">
            {dataWeather && (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pt-3">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="col">
                    <div className="custom-col-days text-white flex-column d-flex align-items-center justify-content-center">
                      <div className="container-fluid d-flex align-items-center justify-content-left">
                        {hours[index]}...
                      </div>
                      <img
                        src={`https://openweathermap.org/img/wn/${dataWeather.list[index].weather[0].icon}@2x.png`}
                      />
                      <div className="container-fluid d-flex align-items-center justify-content-between">
                        <div>
                          {parseInt(dataWeather.list[index].main.temp)}ºC
                        </div>
                        <div>{dataWeather.list[0].pop * 100}%</div>
                      </div>
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
                  <div className="container-fluid custom-col-days d-flex flex-column align-items-center justify-content-center">
                    <h5 className="text-white">Precipitation Probability</h5>
                    <div className="d-flex align-items-center justify-content-center">
                      <h1 className="text-white display-2 number-counter">
                        {dataWeather.list[0].pop * 100}
                      </h1>
                      <h1 className="text-white">%</h1>
                    </div>
                  </div>
                </div>

                <div key={2} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Humidity</h5>
                    <div className="d-flex align-items-center justify-content-center">
                      <h1 className="text-white display-2 number-counter">
                        {dataWeather.list[0].main.humidity}
                      </h1>
                      <h1 className="text-white">%</h1>
                    </div>
                  </div>
                </div>

                <div key={3} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Wind Speed</h5>
                    <div className="d-flex align-items-center justify-content-center">
                      <h1 className="text-white display-2 number-counter me-2">
                        {dataWeather.list[0].wind.speed}
                      </h1>
                      <h1 className="text-white">m/s</h1>
                    </div>
                  </div>
                </div>

                <div key={4} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Air Pressure</h5>
                    <div className="d-flex align-items-center justify-content-center">
                      <h1 className="text-white display-2 number-counter me-2">
                        {dataWeather.list[0].main.pressure}
                      </h1>
                      <h1 className="text-white"> mb</h1>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
            <div className="text-white mt-5">Created by Miguel Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
