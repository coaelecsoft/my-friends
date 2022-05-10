import React, { useState, useEffect } from "react";

function Flip() {
    const [base, setBase] = useState([])

    const [weather, setWeather] = useState([])


    const fetchData = async () => {
        const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        const data = await response.json()
        setBase(data)
    }

    const fetchDataW = async () => {
        const response = await fetch("http://api.weatherstack.com/current?access_key=d634cb4f8134e382743f5d638f26bf49&query=Batajnica")
        const dataw = await response.json()
        setWeather(dataw)
    }


    useEffect(() => {

        fetchData()
        fetchDataW()

    }, [])
 

  return (

      <div>
          <h1>Weather for: {base.name}</h1>
          <h2>{weather['request'].query}</h2>
          <h2>{weather['location'].name}</h2>
          <h2>{weather['current'].temperature}</h2>
          <h2>{weather['current'].wind_speed}</h2>
          <h2>{weather['current'].wind_dir}</h2>
          <h2>{weather['current'].wind_degree}</h2>
          <h2>{weather['current'].humidity}</h2>
          <h2>{weather['current'].pressure}</h2>
          <figure>
              <img src={weather['current'].weather_icons} />
          </figure>
    </div>
  );

}


export default Flip;