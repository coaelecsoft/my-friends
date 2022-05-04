import React, { useState, useEffect } from "react";
//const gitHubUrl = "https://api.github.com/users/deekshasharma";
//import axios from "axios"
function Api() {
    const [base, setBase] = useState([])


    const fetchData = async () => {
        const response = await fetch("https://izrada-sajta.rs/api/")
        const data = await response.json()

        setBase(data)

    }


    useEffect(() => {

        fetchData()

    }, [])
     /*
    const [userData, setUserData] = useState({});


    useEffect(() => {

        getGitHubUserWithFetch();

    }, []);


    const getGitHubUserWithFetch = async () => {

        const response = await fetch(gitHubUrl);

        const jsonData = await response.json();

        setUserData(jsonData);

    };
   
    const [posts, setUsers] = useState([])
    const fetchData = async () => {
        const response = await fetch("https://izrada-sajta.rs/post/")
        console.log(data)
        const data = await response.json()
        setUsers(data)
    }
    useEffect(() => {
        fetchData()       
    }, [])
    */

  return (

    <div className="App">

          {base.length > 0 && (
              <ul>
                  {base.map(item => (
                      <li key={item.base_id}>id: { item.base_id } - {item.title_sr_latn}</li>

                  ))}

              </ul>

          )}
         
</div>
  );

}


export default Api;