import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="w-100 justify-content-center">
        <div className="row mt-4 ms-.5">
          <div className="col-9 ">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn-primary w-100" />
          </div>
        </div>
      </form>

      <h1>New York</h1>
      <ul className="list-unstyled">
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
              alt="Sunny"
              className="weather-icon me-2"
            />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="col-6">
          <ul className="list-unstyled">
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
