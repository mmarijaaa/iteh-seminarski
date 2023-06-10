import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';


const Pregled = ({pregled, token}) => {

  const[pregledData, setPregledData]=useState({
    datum_pregleda:pregled.datum_pregleda,
    opis: pregled.opis
  })

  let navigate = useNavigate();

    function handleTerapija() {
      window.sessionStorage.setItem("pregled_id", pregled.id);
      navigate('/terapijapacijenta');
    }

    function handleInput(e) {
      let newPregledData = pregledData;
      newPregledData[e.target.name] = e.target.value;
      setPregledData(newPregledData);
  } 
  
    function handleIzmenaPregled(){
      var config = {
        method: 'put',
        url: 'http://127.0.0.1:8000/api/izmenapregled/'+ pregled.id,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + window.sessionStorage.getItem("auth_token")
        },
        data : pregledData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert('Pregled je izmenjen')
      })
      .catch((error) => {
        console.log(error);
      });
    }

    return (

      <div className="pregled">
        <div className="datum">
          {pregled.datum_pregleda}
        </div>
        <div className="opis">
          {pregled.opis}
        </div>
        <button onClick={handleTerapija}>
          TERAPIJA
        </button>

        <div className="pregled">
        <div className="datum">
          <input type="text" name='datum_pregleda' onInput={handleInput} defaultValue={pregledData.datum_pregleda}/>
        </div>
        <div className="opis">
          <input type="text" name='opis' onInput={handleInput} defaultValue={pregledData.opis}/>
          
        </div>
        <button onClick={handleIzmenaPregled}>
          IZMENI PREGLED
        </button>
        </div>
      </div>
        
    )

}

export default Pregled