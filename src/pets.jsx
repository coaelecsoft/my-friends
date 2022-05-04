import React, { useState, useEffect } from "react";
//const gitHubUrl = "https://api.github.com/users/deekshasharma"
//import axios from "axios"
//const pet = https://api.publicapis.org/entries

function Pets() {
   // const [base, setBase] = useState([])

    const[randomDog, setRandomDog] = useState([])

    const fetchData = async () => {
        let data = [];
        for (let i = 0; i < 13; i++) {
            const response = await fetch("https://dog.ceo/api/breeds/image/random")
            const datajson = await response.json()
            data.push(datajson);           
        }
        setRandomDog(data)


    }


    useEffect(() => {
        fetchData()
    }, [])

  return (

      <>
          <h2>Random dogs{randomDog.length}</h2>
          {randomDog.length > 0 && (
              <ul className="flex-articles">
                  {randomDog.map(item => (
                        <li> 
                            <figure>
                                <img alt="random Dog " src={item.message} />
                            </figure>
                        </li>
                  ))}

              </ul>

          )}




         
</>
  );

}


export default Pets;