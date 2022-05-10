import React, { useState, useEffect } from "react";

function Weather() {
    //const [base, setBase] = useState([])

    const [weather, setWeather] = useState([])



    const fetchData = async () => {
        const response = await fetch("http://api.weatherstack.com/current?access_key=d634cb4f8134e382743f5d638f26bf49&query=Batajnica")
        const data = await response.json()
        setWeather(data)
    }


    useEffect(() => {

        fetchData()

    }, [])
 

  return (

      <div>
         
          <h2>{weather['request'].query}</h2>
          <h2>{weather['location'].name}</h2>
          <h2>{weather['current'].temperature}</h2>
          <h2>{weather['current'].wind_speed}</h2>
          <h2>{weather['current'].wind_dir}</h2>
          <h2>{weather['current'].wind_degree}</h2>
          <h2>{weather['current'].humidity}</h2>
          <h2>{weather['current'].pressure}</h2>
          
    </div>
  );

}


export default Weather;