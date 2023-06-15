import React, {useState} from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import '../forme.css';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logo from '../..//assets/logo34.png'
import axios from "axios";
import { Outlet } from 'react-router-dom';
import { BsNodePlusFill } from 'react-icons/bs';



const NavbarDoktor = () => {
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
          window.location.reload(false);
          window.localStorage.setItem("isLogged", false);
    
          
        })
        .catch((error) => {
          console.log(error);
        });
        
      }


  return (
    <div className="">
      <li className="navItem">
              <Link to="/login" id='navLink' className="navLink" onClick={handleLogout}>DOKTOR LOGOUT </Link>
            </li></div>
  )
}

export default NavbarDoktor