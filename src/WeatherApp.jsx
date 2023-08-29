import { useState, useSyncExternalStore } from "react";
import "./styles/WeatherApp.css";

export const WeatherApp = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f6b08b447c5b3aaadd5d8233aff2fada";

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
      const data = await response.json();
      setDataWeather(data);
    } catch (error) {}
    console.error("Ocurrió el siguiente problema: ", error);
  };

  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState(null);

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 0) fetchWeather();
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
        </div>
        <div className="custom-col2 col-md-9">
          <h1>Clima 360</h1>
        </div>
      </div>
    </div>
  );
};
