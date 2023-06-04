import React, {useState} from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logo from '../..//assets/logo34.png'
import axios from "axios";
import { Outlet } from 'react-router-dom';

const Navbar = ({token, token2}) => {

  const [active, setActive]=useState('navBar');
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar=()=>{
    setActive('navBar')
  }
  
  //logout DOKTOR
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
    })
    .catch((error) => {
      console.log(error);
    });
  }

  //logout PACIJENT
  function handleLogout2() {
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/logoutpacijent',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token2"), 
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem("auth_token2",null);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <a href="#"><img src={logo} alt="" /></a>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">Početna</Link>
            </li>
            <li className="navItem">
            <Link to="/blog" className="navLink">Blog</Link>
            </li>
            <li className="navItem">
            <Link to="/about" className="navLink">O meni</Link>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Kontakt</a>
            </li>

            

            {token == null && token2 == null ?  
            
            <div>
            <li className="navItem">
              <Link to="/register" className="navLink">DOKTOR REGISTER </Link>
            </li> 

            <li className="navItem">
              <Link to="/login" className="navLink">DOKTOR LOGIN </Link>
            </li>

            <li className="navItem">
              <Link to="/loginpacijent" className="navLink">PACIJENT LOGIN </Link>
            </li>
            </div>

            : 

            token != null && token2 == null ? 

            <div>
            <li className="navItem">
              <Link to="/profildoktora/registerpacijent" className="navLink">PACIJENT KREIRANJE </Link>
            </li>

            <li className="navItem">
              <Link to="/listapacijenata" className="navLink" >LISTA PACIJENATA </Link>
            </li>
            

            <li className="navItem">
              <Link to="/login" className="navLink" onClick={handleLogout}>DOKTOR LOGOUT </Link>
            </li>
            </div>
              
            : 
            
            <div>
              <li className="navItem">
              <Link to="/loginpacijent" className="navLink" onClick={handleLogout2}>PACIJENT LOGOUT </Link> 
            </li>
            </div>

            



            }

            <button className='btn'>
              <a href="#">Zakaži pregled</a>
            </button>

          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>
    <Outlet />
    </div>
  )
}

export default Navbar