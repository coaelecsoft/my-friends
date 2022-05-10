import React, { useState, useEffect } from "react";

function Flip() {
    const [base, setBase] = useState([])

   // const [weather, setWeather] = useState([])


    const fetchData = async () => {
        const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        const data = await response.json()
        setBase(data)
    }
   /*
    const fetchData = async () => {
        const response = await fetch("http://api.weatherstack.com/current?access_key=d634cb4f8134e382743f5d638f26bf49&query=Doboj")
        const data = await response.json()
        setWeather(data)
    }
     */


    useEffect(() => {

        
        fetchData()

    }, [])
 

  return (

      <div>
          <h1>Count : {base.length}</h1>
          {base.length > 0 && (
              <ul className="flex-articles">
                  {base.map(item => (
                      <li>
                          <h2>{item.name}</h2>
                          <p>{item.brand}</p>
                          <figure>
                              <img alt="Makeup " src={item.image_link} />
                          </figure>
                          <p className="description">
                              {item.description}
                          </p>
                      </li>
                  ))}

              </ul>

          )}
    </div>
  );

}


export default Flip;