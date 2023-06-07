import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 

const Pregled = () => {

    const [pregledData, setPregledData] = useState({
        id_doktor:"",
        id_pacijent:"",
        datum_pregleda: "",
        opis: ""
      });

    function handleInput(e) {
        let newPregledData = pregledData;
        newPregledData[e.target.name] = e.target.value;
        setPregledData(newPregledData);
    } 

    function handleZakaziPregled(e) {

        e.preventDefault();
        
        let idpacijenta = window.sessionStorage.getItem("pacijent_id");
        //console.log("Pregled zakazan"+idpacijenta);

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/pregledpacijent/'+idpacijenta,
            headers: {
              'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
            },
            data: pregledData,
          };

          axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className="formapregled">

        <div className="pregled"><h1>ZAKAZI PREGLED</h1></div>

        <div className="datumpregleda" >
            <input type="datetime-local" name="datum_pregleda" onInput={handleInput}/>
        </div>
        <div className="opispregleda">
            <input type="text" name="opis" onInput={handleInput}/>
        </div>

        <button onClick={handleZakaziPregled}>
            ZAKAZI
        </button>

        </div>
    )

}

export default Pregled