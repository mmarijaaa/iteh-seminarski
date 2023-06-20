import React from 'react'
import { useState, useEffect } from 'react';
import './forme.css';


const TerapijaPregled = ({terapija}) => {

  return (
    <div>
         <div className="modalpolje" >
            <p>Lekovi:</p> {terapija.lekovi}
        </div>
        <div className="modalpolje" >
            <p>Način primene:</p> {terapija.nacin_primene}
        </div>
        <div className="modalpolje" >
            <p>Komentar:</p> {terapija.komentar}
        </div>

    </div>
  )
}

export default TerapijaPregled