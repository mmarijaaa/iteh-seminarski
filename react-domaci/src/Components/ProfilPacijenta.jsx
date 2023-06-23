import React from 'react'
import './forme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PregledPacijent from './PregledPacijent';
import { Link } from 'react-router-dom';

const ProfilPacijenta = () => {

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
      <div className='pocetna'>
        <div className='linkovi'>
            <Link className="link" to='/pacijent/listapregleda'>Lista pregleda</Link>
            <Link className="link" to ="/loginpacijent" onClick={handleLogout2}>Odjava</Link> 
        </div>
        <Outlet/>
      </div>
    );

};

export default ProfilPacijenta;
