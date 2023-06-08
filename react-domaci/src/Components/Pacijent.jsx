import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';


const Pacijent = ({pacijent}) => {

  const [pacijentData, setPacijentData] = useState({
    name: pacijent.name,
    jmbg: pacijent.jmbg,
    roditelj: pacijent.roditelj,
    godine:pacijent.godine, 
    email:pacijent.email,
    
    //id_doktor:""
  });

  let navigate = useNavigate();

  function handlePrikaz() {
    console.log("PRIKAZ");
  }

  function handleInput(e) {
    let newPacijentData = pacijentData;
    newPacijentData[e.target.name] = e.target.value;
    setPacijentData(newPacijentData);
  } 

  function handleIzmena(e) {
    let idpac=pacijent.id;
     e.preventDefault(); 
        axios
        .put("http://127.0.0.1:8000/api/izmenapacijent/"+idpac,   
        pacijentData)
        .then((res)=> {
            console.log(res.data);  
             
        })
        .catch((e)=> {
            console.log(e); 
        });
  }

  function handleBrisanje(e) {
    let idpac=pacijent.id;
     //e.preventDefault(); 
        axios
        .delete("http://127.0.0.1:8000/api/brisanjepacijenta/"+idpac)
        .then((res)=> {
            console.log("Obrisano");  
          
        })
        .catch((e)=> {
            console.log(e); 
        });
  }

  function handlePregled() {
    window.sessionStorage.setItem("pacijent_id", pacijent.id);
    navigate("/listapregledadoktor"); 
  }

  return (
    <div>
    <div className='pacijenti'>
        <div className='ime'>
          Pacijent: {pacijent.name}
        </div>
        <div className="jmbg">  
          JMBG: {pacijent.jmbg}
        </div>
        <div className="roditelj">
          RODITLEJ: {pacijent.roditelj}
        </div>
        <div className="godine">
          GODINE: {pacijent.godine}
        </div>
        <div className="email">
          EMAIL: {pacijent.email}
        </div>
        
        <div className="doktor">
          DOKTOR: {pacijent.id_doktor}
        </div>
        <button onClick={handlePrikaz}>
          PRIKAZI DETALJE PACIJENTA
        </button>
        <button onClick={handleIzmena}>
          IZMENI PACIJENTA
        </button>
        <button onClick={handleBrisanje}>
          OBRISI PACIJENTA
        </button>
        <button onClick={handlePregled}>
          ZAKAZI PREGLED
        </button>
    </div>

    <div className='modal1'>
    <div className='id'>
      <input type="hidden" onInput={handleInput} name="id" value={pacijentData.id}/>
      </div>
      <div className='ime'>
      Pacijent: <input type="text"  name="name" onInput={handleInput} />
      </div>
      <div className="jmbg">  
        JMBG: <input type="text"  name="jmbg" onInput={handleInput} value={pacijentData.jmbg}/>
      </div>
      <div className="roditelj">
        RODITLEJ: <input type="text"  name="roditelj" onInput={handleInput} value={pacijentData.roditelj}/> 
      </div>
      <div className="godine">
        GODINE: <input type="text"  name="godine" onInput={handleInput} value={pacijentData.godine}/>
      </div>
      <div className="email">
        EMAIL: <input type="text"  name="email" onInput={handleInput} value={pacijentData.email}/>
      </div>
      
      <div className='iddok'>
      <input type="hidden" onInput={handleInput} value={pacijentData.id_doktor}/>
      </div>
      
      <button onClick={handleIzmena}>
        IZMENI PACIJENTA
      </button>
      

    </div>

</div>
  )
}

export default Pacijent