import React from 'react'
import './forme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pregled from './Pregled';
import { Link } from 'react-router-dom';
import TerapijaPregled from './TerapijaPregled';

const PregledPacijent = ({pregled}) => {

  const[terapijaData, setTerapijaData]=useState();
        useEffect(()=>{
            if(terapijaData == null) {

            let config = {
            method: 'get',
            
            url: 'http://127.0.0.1:8000/api/terapija/' + pregled.id,
            headers: { 
              'Authorization': 'Bearer '+ window.sessionStorage.getItem("auth_token2"), 
            },
            data : terapijaData
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setTerapijaData(response.data.terapija);
            //lekovi=response.data.terapija.lekovi;
          })
          .catch((error) => {
            console.log(error);
          });
          }}, [terapijaData]
          );
          
  
  return (
   

    <div className="jedanpregled">
        <div className="pregledpacijent">
            {/*<div className="polje">
            {pregled.id}
            </div>*/}
            <div className="modalpolje">
            <p>Vreme pregleda: </p>{pregled.datum_pregleda}
            </div>
            <div className="modalpolje">
            <p>Opis pregleda: </p>{pregled.opis}
            </div>
        </div>

        <div className='terapijapacijent'>
            {terapijaData != null ?
            
            terapijaData.map((terapija)=>(
            <TerapijaPregled terapija={terapija} key={terapija.id}/> ))
            :
            <h1>nemaaa</h1>
            }
            
          </div>

    </div>

    
  )
}
export default PregledPacijent
