import React, { useState } from 'react';
import './forme.css';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import logo from '../assets/logo36.png'


const ProfilDoktora = () => {

  const [imedoktora, setImedoktora] = useState();
  let user_id = window.sessionStorage.getItem("user_id");
  //prikaz imena doktora
  let config = {
    method: 'get',
    url: 'http://127.0.0.1:8000/api/dr/'+user_id,
    headers: { 
      'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
    },
    data : imedoktora
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log(response.data.name);
    setImedoktora(response.data.name);
  })
  .catch((error) => {
    console.log(error);
  });


  //logout doktora
    function handleLogout() {
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"), 
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem("auth_token",null);
      window.localStorage.setItem("auth_token_local",null);
      window.sessionStorage.setItem("user_id",null);
      //window.location.reload(false);
      

      
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

    return(

      <div className="pocetnasve">
          
          <p id='ime'>Dr {imedoktora}</p>

        <div className='pocetna'>

            <div className="linkovi">

            {/*<div className="el1">
                <Link to="/" className="navLink">Početna</Link>
                <Link to="/about" className="navLink">O nama</Link>
                <Link to="/kontakt" className="navLink">Kontakt</Link>
            </div>

            <div className="el2">
                <div className="logoDiv">
                    <a href="#" className='logo flex'>
                    <a href="#"><img src={logo} alt="" /></a>
                    </a>
                </div>
    </div>*/}

            
                
                <Link className="link" to='/doktor/registerpacijent'>Novi pacijent</Link>
                <Link className="link" to='/doktor/listapacijenata'>Pacijenti</Link> 
                <Link className='link' to='/login' onClick={handleLogout}> Odjava</Link>

           

            </div>


        <Outlet/>
        </div>

        </div>

    );

};

export default ProfilDoktora;
