import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';


const Pregled = ({pregled}) => {

  let navigate = useNavigate();

    function handleTerapija() {
      window.sessionStorage.setItem("pregled_id", pregled.id);
      navigate('/terapija');
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
      </div>
        
    )

}

export default Pregled