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

const Navbar = () => {

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
      return(
      <div>
      <li className="navItem">
        <Link to="/register" id='navLink' className="navLink">DOKTOR REGISTER </Link>
      </li> 

      <li className="navItem">
        <Link to="/login" id='navLink' className="navLink">DOKTOR LOGIN </Link>
      </li>

      <li className="navItem">
        <Link to="/loginpacijent" id='navLink' className="navLink">PACIJENT LOGIN </Link>
      </li>
      </div>)
    /*}*/
  

  /*return (
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
            
            window.sessionStorage.getItem("auth_token") != null 
            
            ? 
            
            <li className="navItem">
              <Link to="/login" className="navLink" onClick={handleLogout}>DOKTOR LOGOUT </Link>
            </li>
            
            :

            window.sessionStorage.getItem("auth_token2") != null ?

              <li className="navItem">
              <Link to ="/loginpacijent" className="navLink" onClick={handleLogout2}>PACIJENT LOGOUT </Link> 
            </li>
            
            :

            <></>
         
            }

            <button className='btn'>
              <a href="#">Zakaži pregled</a>
          </button>


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

        } 

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
  )*/
}

export default Navbar