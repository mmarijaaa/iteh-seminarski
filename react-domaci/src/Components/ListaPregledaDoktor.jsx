import React from 'react'
import './forme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pregled from './Pregled';


const ListaPregledaDoktor = () => {

  const [pregledData, setPregledData] = useState({
    id_doktor:"",
    id_pacijent:"",
    datum_pregleda: "",
    opis: ""
  });

//let navigate = useNavigate();

function handleInput(e) {
    let newPregledData = pregledData;
    newPregledData[e.target.name] = e.target.value;
    setPregledData(newPregledData);
} 

let idpacijenta = window.sessionStorage.getItem("pacijent_id");

//CUVANJE PREGLEDA 
function handleZakaziPregled(e) {

  e.preventDefault();
  
  //let idpacijenta = window.sessionStorage.getItem("pacijent_id");
  //console.log("Pregled zakazan"+idpacijenta);

  var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/pregledpacijent/'+idpacijenta,
      headers: {
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
      },
      data: pregledData,
    };

    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      alert("Pregled evidentiran!"); 
      setPregledData(response.data.pregledi);
      window.sessionStorage.setItem("pregled_id_terapija",response.data.pregledi.id);
    })
    .catch((error) => {
      console.log(error);
    });


}

//LISTA PREGLEDA
const [pregledi, setPregledi] = useState();
let iddok = window.sessionStorage.getItem("user_id");

useEffect(()=>{
  if(pregledi == null) {
    axios
    .get('http://127.0.0.1:8000/api/pregledi/'+ iddok + '/' + idpacijenta) 
    .then((res)=>{ 
    console.log(res.data);
    setPregledi(res.data.pregledi);
    });
  }
}, [pregledi]
);

//modal 2 za unosenje novog pregleda 
const[modal2, setModal2] = useState(false);
function toggleModal2() {
  setModal2(!modal2);
}
if(modal2) {
  document.body.classList.add('active-modal')
}else {
  document.body.classList.remove('active-modal')
}

let pacijent_name = window.sessionStorage.getItem("pacijent_name"); 

//modal 1 za unosenje nove terapije
const[modal, setModal] = useState(false);
function toggleModal() {
  setModal(!modal);
  
}
if(modal) {
  document.body.classList.add('active-modal')
}else {
  document.body.classList.remove('active-modal')
}

//KREIRANJE TERAPIJE
const [terapijaData, setTerapijaData] = useState({
  id_pregled:"",
  id_doktor:"",
  id_pacijent:"",
  lekovi: "",
  nacin_primene: "",
  komentar:""
});

function handleInput2(e) {
  let newTerapijaData = terapijaData;
  newTerapijaData[e.target.name] = e.target.value;
  setTerapijaData(newTerapijaData);
}

function handleSacuvajTerapiju(e) { 

  e.preventDefault();

  let idpreg = window.sessionStorage.getItem("pregled_id_terapija");
  let idpac = window.sessionStorage.getItem("pacijent_id");

  var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/terapijapacijent/'+ idpreg + '/' + idpac,
      headers: {
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
      },
      data: terapijaData,
    };

    axios(config)
    .then((response2) => {
      console.log(JSON.stringify(response2.data));
      alert("Terapija kreirana!"); 
      
    })
    .catch((error) => {
      console.log(error);
    });
}


  return (
    <div className="formapregled">

    
    <h2> Pacijent: {pacijent_name} </h2>
    
        <button onClick={toggleModal2}>
          NOVI PREGLED
        </button>
    {modal2 && (
    <div className='modal'>
    <div className='overlay' onClick={toggleModal2}></div>
    <div className='content'>
        

        <div className="datumpregleda" >
        <input type="datetime-local" name="datum_pregleda" onInput={handleInput}/>
        </div>
        <div className="opispregleda">
        <input type="text" name="opis" onInput={handleInput}/>
        </div>
        <button onClick={handleZakaziPregled}>
        SACUVAJ
        </button>
        <button onClick={toggleModal}>
          KREIRAJ TERAPIJU 
        </button>


        
      </div>
      </div>
      )}

    {modal && (
    <div className='modal'>
    <div className='overlay' onClick={toggleModal}></div>
    <div className='content'>
    <div className="pregled"><h1>TERAPIJA</h1></div>

          <div className="datumpregleda" >
              <input type="text" name="lekovi" onInput={handleInput2}/>
          </div>
          <div className="datumpregleda" >
              <input type="text" name="nacin_primene" onInput={handleInput2}/>
          </div>
          <div className="datumpregleda" >
              <input type="text" name="komentar" onInput={handleInput2}/>
          </div>

          <button onClick={handleSacuvajTerapiju}>
              SACUVAJ TERAPIJU
          </button>

    </div>
    </div>
    )}
      


      <div className="listapregleda">
      <h2>Lista pregleda</h2>
        {pregledi == null ? <div><h2>NEMA Pregleda</h2></div> : pregledi.map((pregled)=>(
        <Pregled pregled={pregled} key={pregled.id}/>
        ))}
      </div>

    </div> 
  )
}
 
export default ListaPregledaDoktor;