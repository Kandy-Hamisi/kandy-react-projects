import React from 'react'

const WeatherDetails = (props) => {
  const {data} = props;
  console.log(data);
  const iconUrl  = "http://openweathermap.org/img/wn/"
  + `${data.cod !== 404 ? data.weather[0].icon : null}.png`;
  return (
    <div className='weather-display'>
        {
          data.cod !== 404 ? (
            <div className="weather-container">
              <div className="temperature">
                <h1>
                  {Math.floor(data.main.temp - 273.15)}
                  <sup>o</sup>C
                </h1>
              </div>
              <div className="city-time-date">
                <div className="city">
                  <h4>{data.name}</h4>
                </div>
                <div className="time-date">
                  {/* <h6>06:09 - Monday, 9 Sep '19</h6> */}
                  <h6>As of {new Date().toLocaleTimeString()}</h6>
                </div>
              </div>
              <div className="icon-weather">
                <figure>
                  <img src={iconUrl} alt="icon" />
                </figure>
                <h6>{data.weather[0].description}</h6>
              </div>
            </div>
          ) : (
            <h2>{data.message}</h2>
          )
        }
    </div>
  )
}

export default WeatherDetails