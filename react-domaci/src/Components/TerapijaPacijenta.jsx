import React from 'react'
import './forme.css';
import { useState, useEffect} from 'react';
import axios from 'axios'; 
import TerapijaKreiranje from './TerapijaKreiranje';
import Terapija from './Terapija';

const TerapijaPacijenta = () => {

    const[terapijaData, SetTerapijaData]=useState();

    let id_doktor=window.sessionStorage.getItem("auth_token");
    let id_pacijent=window.sessionStorage.getItem("pacijent_id");
    let id_pregled=window.sessionStorage.getItem("pregled_id");

    useEffect(()=>{

        if(terapijaData == null) {
  
            let config = {
                method: 'get',
                
                url: 'http://127.0.0.1:8000/api/terapija/' + id_doktor + '/' + id_pacijent + '/' + id_pregled,
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': 'Bearer ' + window.sessionStorage.getItem("auth_token")
                },
                data : terapijaData
              };
              
              axios.request(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                SetTerapijaData(response.data.terapija);
              })
              .catch((error) => {
                console.log(error);
              });
  
        }
  
      }, [terapijaData]
  
      );
      return (
        <div className="listapacijenata">
        
        {terapijaData == null ? 
        <div className="text">        
            <h1>kreiranje terapije</h1>
        </div>
        : terapijaData.map((terapija)=>(
            <div className="text">
                <h1>prikaz terapije</h1>
            </div>
        
        ))}
        </div> 
      )
}
export default TerapijaPacijenta