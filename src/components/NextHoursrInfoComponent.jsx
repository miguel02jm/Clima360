import React from "react";

function NextHoursInfoComponent({ isDarkMode, dataWeather }) {
  const hours = [
    "In 0 hours",
    "In 3 hours",
    "In 6 hours",
    "In 9 hours",
    "In 12 hours",
  ];
  return (
    <div className="container">
      <div className="container d-flex justify-content-center">
        <h3>In the following hours...</h3>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pt-3">
        {[1, 2, 3, 4].map((index) => (
          <div key={index}>
            <div
              className={`col ${
                isDarkMode ? "custom-col-data-dark" : "custom-col-data-light"
              } flex-column d-flex align-items-center justify-content-center`}
            >
              <div className="container d-flex justify-content-left">
                {hours[index]}...
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${dataWeather.list[index].weather[0].icon}@2x.png`}
              />
              <h5 className="text-secondary">
                {dataWeather.list[index].weather[0].description}
              </h5>
              <div className="container-fluid d-flex align-items-center justify-content-between">
                <div>{parseInt(dataWeather.list[index].main.temp)}ºC</div>
                <div className="d-flex align-items-center">
                  <div>
                    <i className="fa-solid fa-droplet me-1"></i>
                  </div>
                  <div>{parseInt(dataWeather.list[index].pop * 100)}%</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NextHoursInfoComponent;
