import React, { useState } from 'react'
import '../App.css';
import { FaSearch } from 'react-icons/fa';
import WeatherDetails from '../components/WeatherDetails';
const Sidebar = () => {
    const [queries, setQueries] = useState(['Thika', 'Malindi', 'Mombasa']);
    const [clearing, setClearing] = useState(false);
    const [city, setCity] = useState("");
    

    
    const handleClick = (e) => {
        e.preventDefault();
        // let searchedCity = inputRef.current.value;
        if(city) {
            setQueries(queries => {
                return [...queries, city];
            });
            setCity("");
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
        <WeatherDetails />
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