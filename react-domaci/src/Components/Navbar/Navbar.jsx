import React, {useState} from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logo from '../..//assets/logo34.png'

const Navbar = () => {
  const [active, setActive]=useState('navBar');
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar=()=>{
    setActive('navBar')
  }

  return (
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
            <li className="navItem">
              <Link to="/register" className="navLink">DOKTOR REGISTER </Link>
            </li> 
            <li className="navItem">
              <Link to="/login" className="navLink">DOKTOR LOGIN </Link>
            </li>
            <li className="navItem">
              <Link to="/registerpacijent" className="navLink">PACIJENT REGISTER </Link>
            </li> 
            <li className="navItem">
              <Link to="/loginpacijent" className="navLink">PACIJENT LOGIN </Link>
            </li> 

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
  )
}

export default Navbar