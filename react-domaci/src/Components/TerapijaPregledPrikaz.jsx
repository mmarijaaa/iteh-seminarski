import React from 'react'
import './forme.css';
import { useState, useEffect} from 'react';
import axios from 'axios'; 
import TerapijaKreiranje from './TerapijaKreiranje';
import Terapija from './Terapija';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TerapijaPregled from './TerapijaPregled';

const TerapijaPregledPrikaz = ({terapijapregled}) => {
    
        const[terapijaData, setTerapijaData]=useState();
        useEffect(()=>{
            if(terapijaData == null) {

            let config = {
            method: 'get',
            
            url: 'http://127.0.0.1:8000/api/terapija/1',
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
        <div>
            {terapijaData != null ?
            
            //<h1>lekovi</h1>
            terapijaData.map((terapija)=>(
            <TerapijaPregled terapija={terapija} key={terapija.id}/> ))
            :
            <></> 
            }
            
          </div>
    )
}
export default TerapijaPregledPrikaz