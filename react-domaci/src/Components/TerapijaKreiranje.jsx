import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 

const TerapijaKreiranje = () => {

    const [terapijaData, setTerapijaData] = useState({
        id_pregled:"",
        id_doktor:"",
        id_pacijent:"",
        lekovi: "",
        nacin_primene: "",
        komentar:""
      });

    function handleInput(e) {
        let newTerapijaData = terapijaData;
        newTerapijaData[e.target.name] = e.target.value;
        setTerapijaData(newTerapijaData);
    } 

    function handleSacuvajTerapiju(e) {

        e.preventDefault();

        let idpregleda = window.sessionStorage.getItem("pregled_id");
        let idpacijenta = window.sessionStorage.getItem("pacijent_id");

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/terapijapacijent/'+ idpregleda + '/' + idpacijenta,
            headers: {
              'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
            },
            data: terapijaData,
          };
      
          axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            alert("Pregled evidentiran!"); 
            
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (

    <div className="formapregled">

        {/*<div className="pregled"><h1>TERAPIJA</h1></div>

        <div className="datumpregleda" >
            <input type="text" name="lekovi" onInput={handleInput}/>
        </div>
        <div className="datumpregleda" >
            <input type="text" name="nacin_primene" onInput={handleInput}/>
        </div>
        <div className="datumpregleda" >
            <input type="text" name="komentar" onInput={handleInput}/>
        </div>

        <button onClick={handleSacuvajTerapiju}>
            SACUVAJ TERAPIJU
    </button>*/}

        
          <h1>STO BRE NE RADIS !!!</h1>
        
    
     </div>
    )

}

export default TerapijaKreiranje
