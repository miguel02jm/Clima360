import React from "react";
import "../styles/ParametersSection.css";

function ParametersSection({ isDarkMode, dataWeather, toggleDarkMode, hours }) {
  return (
    <div
      className={`container ${
        isDarkMode ? "custom-col2-dark" : "custom-col2-light"
      } col-md-9 d-flex flex-column`}
      style={{ minHeight: "100vh" }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-end mt-2">
        <button className="custom-btn" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              width="32px"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              width="32px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
      </div>
      {dataWeather !== null && dataWeather !== undefined ? (
        <div>
          <div className="container-fluid d-flex align-items-center justify-content-center mt-3">
            <h3 className="mt-3">In the following hours...</h3>
          </div>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pt-3">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="col">
                  <div
                    className={`container ${
                      isDarkMode
                        ? "custom-col-data-dark"
                        : "custom-col-data-light"
                    } flex-column d-flex align-items-center justify-content-center`}
                  >
                    <div className="container-fluid d-flex align-items-center justify-content-left">
                      {hours[index]}...
                    </div>
                    <img
                      src={`https://openweathermap.org/img/wn/${dataWeather.list[index].weather[0].icon}@2x.png`}
                    />
                    <h5 className="text-secondary">
                      {dataWeather.list[0].weather[0].description}
                    </h5>
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                      <div>{parseInt(dataWeather.list[index].main.temp)}ºC</div>
                      <div>{parseInt(dataWeather.list[0].pop * 100)}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
            <h3 className="mt-3">Relevant Parameters</h3>
          </div>
          <div className="container-fluid mt-2">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
              <div key={1} className="col">
                <div
                  className={`container ${
                    isDarkMode
                      ? "custom-col-data-dark"
                      : "custom-col-data-light"
                  } flex-column d-flex align-items-center justify-content-center`}
                >
                  <h5 className="mt-2">Precipitation Probability</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="display-2 number-counter">
                      {parseInt(dataWeather.list[0].pop * 100)}
                    </h1>
                    <h1>%</h1>
                  </div>
                </div>
              </div>

              <div key={2} className="col">
                <div
                  className={`container ${
                    isDarkMode
                      ? "custom-col-data-dark"
                      : "custom-col-data-light"
                  } flex-column d-flex align-items-center justify-content-center`}
                >
                  <h5 className="mt-2">Humidity</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="display-2 number-counter">
                      {dataWeather.list[0].main.humidity}
                    </h1>
                    <h1>%</h1>
                  </div>
                </div>
              </div>

              <div key={3} className="col">
                <div
                  className={`container ${
                    isDarkMode
                      ? "custom-col-data-dark"
                      : "custom-col-data-light"
                  } flex-column d-flex align-items-center justify-content-center`}
                >
                  <h5 className="mt-2">Wind Speed</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="display-2 number-counter me-2">
                      {dataWeather.list[0].wind.speed}
                    </h1>
                    <h1>m/s</h1>
                  </div>
                </div>
              </div>

              <div key={4} className="col">
                <div
                  className={`container ${
                    isDarkMode
                      ? "custom-col-data-dark"
                      : "custom-col-data-light"
                  } flex-column d-flex align-items-center justify-content-center`}
                >
                  <h5 className="mt-2">Air Pressure</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="display-2 number-counter me-2">
                      {dataWeather.list[0].main.pressure}
                    </h1>
                    <h1> mb</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container d-flex align-items-center justify-content-center mt-5">
          <h2 className="text-secondary mt-5">No info</h2>
        </div>
      )}
      <div className="container d-flex flex-column align-items-center justify-content-center mt-auto">
        <div className="mt-2">
          <p>
            Created by
            <a
              className="text-decoration-none"
              href="https://migueljaendev.netlify.app/"
            >
              {" "}
              Miguel Developer
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParametersSection;
