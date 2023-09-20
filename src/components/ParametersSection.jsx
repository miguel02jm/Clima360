import React from "react";
import OtherParameters from "./OtherParameters";
import NextHoursInfoComponent from "./NextHoursrInfoComponent";
import "../styles/ParametersSection.css";

function ParametersSection({ isDarkMode, dataWeather, toggleDarkMode }) {
  return (
    <div
      className={`container ${
        isDarkMode ? "custom-col2-dark" : "custom-col2-light"
      } col-md-9 d-flex flex-column`}
    >
      <div className="container d-flex justify-content-end mt-2">
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
          <NextHoursInfoComponent
            isDarkMode={isDarkMode}
            dataWeather={dataWeather}
          ></NextHoursInfoComponent>
          <OtherParameters
            isDarkMode={isDarkMode}
            dataWeather={dataWeather}
          ></OtherParameters>
        </div>
      ) : (
        <div className="container d-flex align-items-center justify-content-center mt-5">
          <h2 className="text-secondary mt-5">No info</h2>
        </div>
      )}
      <div className="container d-flex align-items-center justify-content-center mt-auto">
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
  );
}

export default ParametersSection;
