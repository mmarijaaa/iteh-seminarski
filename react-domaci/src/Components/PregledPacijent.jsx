import React from 'react'
import './forme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pregled from './Pregled';
import { Link } from 'react-router-dom';
import TerapijaPregled from './TerapijaPregled';

const PregledPacijent = ({pregled}) => {

  var lekovi="";
  const[modal, setModal] = useState(false);
  const[terapijaData, setTerapijaData]=useState();
    /*const[pregledData, setPregledData]=useState({
        datum_pregleda:pregled.datum_pregleda,
        opis: pregled.opis
      })*/



      useEffect(()=>{
        if(terapijaData == null) {
      let config = {
        method: 'get',
        
        url: 'http://127.0.0.1:8000/api/terapija/' + pregled.id,
        headers: { 
          'Authorization': 'Bearer '+ window.sessionStorage.getItem("auth_token2"), 
          
        },
        data : terapijaData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setTerapijaData(response.data.terapija);
        //lekovi=response.data.terapija.lekovi;
      })
      .catch((error) => {
        console.log(error);
      });
      }}, [terapijaData]
      );
      
    
  
      
    //MODAL - POPUP 


  function toggleModal() {
    setModal(!modal);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  }else {
    document.body.classList.remove('active-modal')
  }




  return (
    <div>
        PregledPacijent

        <div className="pregled">
            <div className="polje">
            {pregled.id}
            </div>
            <div className="polje">
            {pregled.datum_pregleda}
            </div>
            <div className="polje">
            {pregled.opis}
            </div>
            {/*<button onClick={handleTerapija}>
            TERAPIJA
            </button>*/}
            <button>Terapija</button>
        </div>

        
        <h1>TERAPIJA</h1>

        <div>
            {terapijaData != null ?
            
            //<h1>lekovi</h1>
            terapijaData.map((terapija)=>(
            <TerapijaPregled terapija={terapija} key={terapija.id}/> ))
            :
            <h1>nemaaa</h1>
            }
            
          </div>
    

    </div>
  )
}
export default PregledPacijent
