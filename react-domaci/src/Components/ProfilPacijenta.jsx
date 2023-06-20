import React from 'react'
import './forme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PregledPacijent from './PregledPacijent';
import { Link } from 'react-router-dom';

const ProfilPacijenta = () => {

    return(
      <div className='pocetna'>
        <div className='linkovi'>
            <Link className="link" to='/pacijent/listapregleda'>Lista pregleda</Link>

        </div>
        <Outlet/>
      </div>
    );

};

export default ProfilPacijenta;
