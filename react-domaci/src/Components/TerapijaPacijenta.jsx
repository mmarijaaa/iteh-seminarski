import React from 'react'
import './forme.css';
import { useState, useEffect} from 'react';
import axios from 'axios'; 
import TerapijaKreiranje from './TerapijaKreiranje';
import Terapija from './Terapija';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TerapijaPacijenta = () => {

    const[terapijaData, setTerapijaData]=useState();

    //let id_doktor=window.sessionStorage.getItem("user_id");
    //let id_pacijent=window.sessionStorage.getItem("pacijent_id");
    //let id_pregled=window.sessionStorage.getItem("pregled_id");

    let navigate = useNavigate();

    useEffect(()=>{

        if(terapijaData == null) {

    let id_doktor=window.sessionStorage.getItem("user_id");
    let id_pacijent=window.sessionStorage.getItem("pacijent_id");
    let id_pregled=window.sessionStorage.getItem("pregled_id");
  
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
                setTerapijaData(response.data.terapija);
              })
              .catch((error) => {
                console.log(error);
              });
        }
  
      }, [terapijaData]
  
      );

      /*return (
        <div>
        <div className="listapacijenata">
        
        {terapijaData == null ? 
          
          <h1>ne znam</h1>
        : 
        terapijaData.map((terapija)=>(
          <Terapija terapija={terapija} key={terapija.id}/>
        ))
          }

      </div>
      <Outlet/>

      </div> 
      )*/

      if(terapijaData == null) {
        return (
          <div>
            <h1>nesto</h1>
          </div>
        )
      }
      else {
        return (
          <div>
            {terapijaData.map((terapija)=>(
          <Terapija terapija={terapija} key={terapija.id}/>
        ))}
          </div>
        )
      }
}
export default TerapijaPacijenta