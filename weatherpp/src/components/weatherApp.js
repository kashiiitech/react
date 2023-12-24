import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FaStreetView } from "react-icons/fa";


const WeatherApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("karachi");
    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            if (shouldFetch) {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=48c6b5d5675c43525ee6968f1296ff26`;
                const response = await fetch(url);
                const resJson = await response.json();
                setCity(resJson.main);
                setShouldFetch(false); // Reset to prevent repeated calls
            }
        };

        fetchApi();
    }, [shouldFetch, search]); // Depend on shouldFetch

    const tempHandler = () => {
        setShouldFetch(true);
    };


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputField" onChange={(event) => { setSearch(event.target.value) } }></input>
                    <button  onClick={tempHandler} className="btn">Search</button>
                </div>

                {
                    !city ? (
                        <p>No data found</p>
                    ) : (
                        <div>
                        <div className="info"> 
                        <h2 className="location "><FaStreetView />{search}</h2>
        
                        <h1 className="temp">
                            {/* for the temperature */}
                            {city.temp}
                        </h1>
        
                        <h3 className="tempmin_max"> Min: {city.temp_min}Cel | Max : {city.temp_max}Cel</h3>
                        
                    </div>
        
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    </div>    
                    )
                }
          

           

            </div>
        </>
    );
}

export default WeatherApp;