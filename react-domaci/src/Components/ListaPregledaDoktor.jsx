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
      
    })
    .catch((error) => {
      console.log(error);
    });
}


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

  

  return (
    <div className="formapregled">

      <div className="naslovpregled"><h1>ZAKAZI PREGLED</h1></div>

      <div className="datumpregleda" >
        <input type="datetime-local" name="datum_pregleda" onInput={handleInput}/>
      </div>
      <div className="opispregleda">
        <input type="text" name="opis" onInput={handleInput}/>
      </div>

      <button onClick={handleZakaziPregled}>
        ZAKAZI
      </button>

      


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