import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 
import {Outlet, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


const Pregled = ({pregled, token}) => {

  //PODACI O PREGLEDU
  const[pregledData, setPregledData]=useState({
    datum_pregleda:pregled.datum_pregleda,
    opis: pregled.opis
  })

  let navigate = useNavigate();

    function handleTerapija() {
      window.sessionStorage.setItem("pregled_id", pregled.id);
      //navigate('/terapijapacijenta');
    }

    function handleInput(e) {
      let newPregledData = pregledData;
      newPregledData[e.target.name] = e.target.value;
      setPregledData(newPregledData);
  } 
  
  //IZMENA PREGLEDA
    function handleIzmenaPregled(){
      var config = {
        method: 'put',
        url: 'http://127.0.0.1:8000/api/izmenapregled/'+ pregled.id,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + window.sessionStorage.getItem("auth_token")
        },
        data : pregledData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert('Pregled je izmenjen');
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    //BRISANJE PREGLEDA
    function handleBrisanje() {
      let config = {
        method: 'delete',
        url: 'http://127.0.0.1:8000/api/brisanjepregleda/'+pregled.id,
        headers: { 
          'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"), 
          
        },
        data : pregledData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert('Pregled je izbrisan!');
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
      
    }

  //MODAL - POPUP 
  const[modal, setModal] = useState(false);

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
      <div className="pregledi">

        <div className="polje">
          {pregled.datum_pregleda}
        </div>
        <div className="polje1">
          {pregled.opis}
        </div>
        {/*<button onClick={handleTerapija}>
          TERAPIJA
        </button>*/}
        <Link to='/doktor/terapijapacijenta' onClick={handleTerapija} className='polje3'>TERAPIJA</Link>
        
        <button onClick={toggleModal} className='polje3'>
          IZMENA
        </button>
        <button className='polje3' onClick={handleBrisanje}>
          BRISANJE
        </button>


        {modal && (
        <div className='modal'>
        <div className='overlay' onClick={toggleModal}></div>
        <div className='content'>

        <div className="modalpolje">
          <p>Vreme pregleda: </p><input type="text" name='datum_pregleda' onInput={handleInput} defaultValue={pregledData.datum_pregleda}/>
        </div>
        <div className="modalpoljeopis">
          <p>Opis pregleda: </p><textarea type="text" name='opis' onInput={handleInput} defaultValue={pregledData.opis}/>
          
        </div>
        <div className="dugmeklasa">
        <button className='izmenadugme' onClick={handleIzmenaPregled}>
          IZMENI PREGLED
        </button>
        </div>

        </div>
        </div>
        )}


        </div>
      <Outlet/>
      </div>
        
    )

}

export default Pregled