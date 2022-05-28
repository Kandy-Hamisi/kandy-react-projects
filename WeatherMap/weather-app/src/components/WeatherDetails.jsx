import React from 'react'

const WeatherDetails = () => {
  return (
    <div className='weather-display'>
        <div className="weather-container">
          <div className="temperature">
            <h1>16<sup>o</sup></h1>
          </div>
          <div className="city-time-date">
            <div className="city">
              <h4>London</h4>
            </div>
            <div className="time-date">
              <h6>06:09 - Monday, 9 Sep '19</h6>
            </div>
          </div>
          <div className="icon-weather">
            <figure>
              <img src="" alt="icon" />
            </figure>
            <h6>Cloudy</h6>
          </div>
        </div>
    </div>
  )
}

export default WeatherDetails