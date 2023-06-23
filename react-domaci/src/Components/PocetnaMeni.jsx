import React from 'react';
import './forme.css';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import logo from '../assets/logo36.png'
const PocetnaMeni = () => {

    return (

        <div className='Elements'>
            <div className='allElements'>

            <div className="el1">
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
            </div>

            <div className="el3">
            <Link to="/register" className="navLink">Registracija</Link>
            <Link to="/login" className="navLink">Doktor</Link>
            <Link to="/loginpacijent" className="navLink">Pacijent</Link>
            </div>
        </div>

        <Outlet/>
        </div>
        

    );

};

export default PocetnaMeni