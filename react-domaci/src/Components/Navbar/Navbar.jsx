import React, {useState, useEffect} from 'react'
import './navbar.css'

import { Link } from "react-router-dom";
import '../forme.css';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logo from '../..//assets/logo36.png'
import axios from "axios";
import { Outlet } from 'react-router-dom';
import { BsNodePlusFill } from 'react-icons/bs';

const Navbar = ({token, token2, addToken}) => {

  const [active, setActive]=useState('navBar');
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar=()=>{
    setActive('navBar')
  }

  /*useEffect(()=> {
    if(window.sessionStorage.getItem('auth_token') != null) {
      addToken(window.sessionStorage.getItem('auth_token'));

    } else{
      addToken(null)
    }
  })

  /*let loginToken1=localStorage.getItem('auth_token');
  const [t1, setT1]=useState(loginToken1);*/

  /*useEffect(() => {
    setT1(window.sessionStorage.getItem("auth_token"));
  }, []);*/

  /*useEffect(() => {
    const loginToken1=localStorage.getItem('auth_token')
    setT1(loginToken1)
  }, [])*/
  
  //console.log(">>>>>>>>"+t1+">>>>>>>>")
  
  //logout DOKTOR
  function handleLogout() {
    
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/logout',
      headers: { 
        'Authorization': 'Bearer '+ window.sessionStorage.getItem("auth_token2"), 
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem("auth_token",null);
      window.localStorage.setItem("auth_token_local",null);
      window.sessionStorage.setItem("user_id",null);
      window.location.reload(false);
      

      
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
    .then((response2) => {
      console.log(JSON.stringify(response2.data));
      window.sessionStorage.setItem("auth_token2",null);
      window.sessionStorage.setItem("pacijent_user_id",null);
      
      //window.sessionStorage.setItem("auth_token",null);

      window.location.reload(false);

    })
    .catch((error) => {
      console.log(error);
    });
  }

  

  /*if(token!= null){
    return (<div className="">
      <li className="navItem">
              <Link to="/login" id='navLink' className="navLink" onClick={handleLogout}>DOKTOR LOGOUT </Link>
            </li></div>)
  }
  
  else if(token2!= null){
      return(
      <div className="">
      <li className="navItem">
        <Link to ="/loginpacijent" id='navLink' className="navLink" onClick={handleLogout2}>PACIJENT LOGOUT </Link> 
      </li></div>)
    }*/
  /*else{*/
      
    /*}*/
  

  return (
    <div>
    <section className="navBarSection">
      
        <div className={active}>
          
          <div className='allElements'>
          <div className="el1">
            <input type="checkbox" id='check' />
            <label htmlFor="check">
              <i className='fas fa-bars'></i>
            </label>
            <li className="navItem">
              <Link to="/" className="navLink">Početna</Link>
            </li>
            
            <li className="navItem">
            <Link to="/about" className="navLink">O nama</Link>
            </li>
            <li className="navItem">
              <a href="/kontakt" className="navLink">Kontakt</a>
            </li>






          </div>

          <div className="el2">
          <div className="logoDiv">
                 <a href="#" className='logo flex'>
                 <a href="#"><img src={logo} alt="" /></a>
                  </a>
             </div>
          </div>
            
            
          

            
            {token == null ?  
            
            
            <div className="el3">

            <li className="navItem">
              <Link to="/register" className="navLink">Registracija</Link>
            </li> 

            <li className="navItem">
              <Link to="/login" className="navLink">Doktor</Link>
            </li>

            <li className="navItem">
              <Link to="/loginpacijent" className="navLink">Pacijent</Link>
            </li>

            </div>
            
            : 
            
            <div className="el3">
            <li className="navItem">
              <Link to="/login" className="navLink" onClick={handleLogout}>DOKTOR LOGOUT </Link>
            </li>
            </div>
            
/*
            token2 != null ?

            <div className="el3">
              <li className="navItem">
              <Link to ="/loginpacijent" className="navLink" onClick={handleLogout2}>PACIJENT LOGOUT </Link> 
            </li>
            </div>
            :

            <></>*/
         
  }

</div>


          {/*token == null ?

          <div className='meni1'>
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

            token2 == null ?

            <div className='meni1'>
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

          token != null ?

          <li className="navItem">
          <a href="/login" className="navLink" onClick={handleLogout}>DOKTOR LOGOUT </a>
        </li>

        :

        token2 != null ?

        <div>
        <li className="navItem">
          <a href="/loginpacijent" className="navLink" onClick={handleLogout2}>PACIJENT LOGOUT </a> 
        </li>
        </div>

        :

        <li className="navItem">
                <Link to="/login" className="navLink">DOKTOR LOGIN </Link>
              </li>

          */} 
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
        </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/> 
      </div>

      
    </section>
    <Outlet />
    </div>
  )
}

export default Navbar