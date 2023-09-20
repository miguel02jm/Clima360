// InputComponent.jsx
import React from "react";

function InputComponent({ isDarkMode, handleChangeCity, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mt-3">
        <input
          type="text"
          className={`form-control ${
            isDarkMode ? "custom-input-dark" : "custom-input-light"
          }`}
          placeholder="Enter location"
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
  );
}

export default InputComponent;
