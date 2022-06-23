import React, { useState } from 'react'
import '../App.css';
import { FaSearch } from 'react-icons/fa';
import WeatherDetails from '../components/WeatherDetails';
const Sidebar = () => {
    const [queries, setQueries] = useState(['Thika', 'Malindi', 'Mombasa']);
    const [clearing, setClearing] = useState(false);
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    
    const APIKEY = "c41fbd5cfd39aa4a516bdefffae72a03";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${APIKEY}`;

    const getWeather = () => {
        fetch(url)
            .then(result => result.json())
            .then(myData => {
                setWeather({
                    myData:myData
                });
                
            });
        setCity("");
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        // let searchedCity = inputRef.current.value;
        if(city) {
            setQueries(queries => {
                return [...queries, city];
            });
            getWeather();
            // const myData = await fetch(
            //     `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${APIKEY}`
            // )
            // .then(result => result.json())
            // .then(myData => console.log(myData));
            // setCity("");
        } else {
            alert("City must be entered");
        }
    }

    const handleDelete = () => {
        setClearing(true);
        setTimeout(() => {
            setQueries([]);
            setClearing(false);
        }, 1000);
        
    }

  return (
    <div>
        {
            weather.myData !== undefined ?
            <WeatherDetails data={weather.myData}/>
            : null
        }
        <section className='sidebar-section'>
            <div className="search-container">
                <form name="myForm">
                    <input
                        type="text"
                        onChange={(e)=>setCity(e.target.value)}
                        name="city"
                        id="city"
                        placeholder='Another location'
                    />
                    <button
                        type='submit'
                        onClick={handleClick}
                    >
                        <FaSearch />
                    </button>
                </form>
                <div className="recently-searched">
                    {
                        clearing && <h3 className='clearing'>Clearing...</h3>
                    }
                    <button
                        className={(queries.length > 0) ? "showbtn" : "hidebtn"}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <ul >
                        {
                            queries.map(item => {
                                return <li className='item'>{item}</li>
                            })
                        }
                    </ul>
                    <div className="divider">
                        <hr className='mydivider'/>
                    </div>
                </div>
        
            </div>
        </section>
    </div>
  )
}

export default Sidebar;