import React from 'react'
import './forme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PregledPacijent from './PregledPacijent';
import { Link } from 'react-router-dom';

const ProfilPacijenta = () => {

  const[imepacijenta, setImepacijenta] = useState();
  let pac_id = window.sessionStorage.getItem("pacijent_user_id");
  //prikaz imena pacijenta
  let config = {
    method: 'get',
    url: 'http://127.0.0.1:8000/api/pac/'+pac_id,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token2")
    },
    data : imepacijenta
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log(response.data.name);
    setImepacijenta(response.data.name);
  })
  .catch((error) => {
    console.log(error);
  });

  

  //logout pacijenta
  function handleLogout2() {
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/logoutpacijent',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token2"), 
      }
    };
    
    axios.request(config)
    .then((response2) => {
      console.log(JSON.stringify(response2.data));
      window.sessionStorage.setItem("auth_token2",null);
      window.sessionStorage.setItem("pacijent_user_id",null);
      
      //window.sessionStorage.setItem("auth_token",null);

      //window.location.reload(false);

    })
    .catch((error) => {
      console.log(error);
    });
  }

    return(
      <div className="pocetnasve">

        <p id='ime'>Pacijent {imepacijenta}</p>

      <div className='pocetna'>
        <div className='linkovi'>
            <Link className="link" to='/pacijent/listapregleda'>Lista pregleda</Link>
            <Link className="link" to ="/loginpacijent" onClick={handleLogout2}>Odjava</Link> 
        </div>
        <Outlet/>
      </div>
      </div>
    );

};

export default ProfilPacijenta;
