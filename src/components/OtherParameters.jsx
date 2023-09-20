import React from "react";

function OtherParameters({ isDarkMode, dataWeather }) {
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center mt-3">
        <h3>Relevant Parameters</h3>
      </div>
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
          <div key={1}>
            <div
              className={`col ${
                isDarkMode ? "custom-col-data-dark" : "custom-col-data-light"
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

          <div key={2}>
            <div
              className={`col ${
                isDarkMode ? "custom-col-data-dark" : "custom-col-data-light"
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

          <div key={3}>
            <div
              className={`col ${
                isDarkMode ? "custom-col-data-dark" : "custom-col-data-light"
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

          <div key={4}>
            <div
              className={`col ${
                isDarkMode ? "custom-col-data-dark" : "custom-col-data-light"
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
  );
}

export default OtherParameters;
