import React from 'react'
import { useState, useEffect } from 'react';
import './forme.css';


const TerapijaPregled = ({terapija}) => {

  return (
    <div>TerapijaPregled
         <div className="datumpregleda" >
            NAZIV: {terapija.lekovi}
        </div>
        <div className="datumpregleda" >
            NACIN PRIMENE: {terapija.nacin_primene}
        </div>
        <div className="datumpregleda" >
            KOMENTAR: {terapija.komentar}
        </div>

    </div>
  )
}

export default TerapijaPregled