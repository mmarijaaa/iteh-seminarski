import React from 'react'
import { useState, useEffect } from 'react';
import './forme.css';


const TerapijaPregled = ({terapija}) => {

  return (
    <div>
         <div className="modalpolje" >
            <p>Lekovi:</p> <div className="ttxt">{terapija.lekovi}</div>
        </div>
        <div className="modalpolje" >
            <p>Način primene:</p> <div className="ttxt">{terapija.nacin_primene}</div>
        </div>
        <div className="modalpolje" >
            <p>Komentar:</p> <div className="ttxt">{terapija.komentar}</div>
        </div>

    </div>
  )
}

export default TerapijaPregled