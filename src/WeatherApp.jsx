import { useState, useEffect } from "react";
import "./styles/WeatherApp.css";

export const WeatherApp = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "f6b08b447c5b3aaadd5d8233aff2fada";
  const days = 5;
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

  const hours = [
    "In 0 hours",
    "In 3 hours",
    "In 6 hours",
    "In 9 hours",
    "In 12 hours",
  ];

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `${urlBase}?q=${city}&cnt=${days}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setDataWeather(data);
    } catch (error) {}
    console.error("Ocurrió el siguiente problema: ", error);
  };

  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState(null);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualiza la fecha cada segundo

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];

  const [cityName, setCityName] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setCityName(data.address.city || "Unknown City");
          } catch (error) {
            console.error("Error fetching city name:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

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
                <div key={dataWeather.city.id} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Precipitation Probability</h5>
                    <h1>{dataWeather.list[0].pop}%</h1>
                  </div>
                </div>

                <div key={dataWeather.city.id} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Humidity</h5>
                    <h1>{dataWeather.list[0].main.humidity}%</h1>
                  </div>
                </div>

                <div key={dataWeather.city.id} className="col">
                  <div className="container-fluid custom-col-days text-white d-flex flex-column align-items-center justify-content-center">
                    <h5>Wind Speed</h5>
                    <h1>{dataWeather.list[0].wind.speed} metre/sec</h1>
                  </div>
                </div>

                <div key={dataWeather.city.id} className="col">
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
