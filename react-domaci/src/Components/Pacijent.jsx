import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Pacijent = ({pacijent}) => {

  const [pacijentData, setPacijentData] = useState({
    name: pacijent.name,
    jmbg: pacijent.jmbg,
    roditelj: pacijent.roditelj,
    godine:pacijent.godine, 
    email:pacijent.email,
  });

  //let navigate = useNavigate();

  

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
            alert("Pacijent izmenjen!");
            window.location.reload(false);
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
          alert("Pacijent obrisan");
          window.location.reload(false);
        })
        .catch((e)=> {
            console.log(e); 
        });
  }

  function handlePregled() {
    window.sessionStorage.setItem("pacijent_id", pacijent.id);
    window.sessionStorage.setItem("pacijent_name", pacijent.name);
    //navigate("/listapregledadoktor"); 
    
  }

  //MODAL - POPUP 
  const[modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  const[modal2, setModal2] = useState(false);

  function toggleModal2() {
    setModal2(!modal2);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  }else {
    document.body.classList.remove('active-modal')
  }

  if(modal2) {
    document.body.classList.add('active-modal')
  }else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>

    <div className="pacijenti">
        <div className='polje'>
          {pacijent.name}
        </div>
        <div className="polje">
          {pacijent.godine} godina/e
        </div>
        <button className="polje2" onClick={toggleModal2}>
          DETALJI
        </button>
        <button className="polje2" onClick={toggleModal}>
          IZMENA
        </button>
        <button className="polje2" onClick={handleBrisanje}>
          BRISANJE
        </button>
        {/*<button onClick={handlePregled}>
          ZAKAZI PREGLED
        </button>*/}
        <Link className="polje2" to='/doktor/listapregleda' onClick={handlePregled}>PREGLEDI</Link>
    </div>

    {modal2 && (
    <div className='modal'>
    <div className='overlay' onClick={toggleModal2}></div>
    <div className='content'>
        <div className='modalpolje'>
          <p>Ime pacijenta: </p> {pacijent.name}
        </div>
        <div className="modalpolje">  
        <p>JMBG:</p> {pacijent.jmbg}
        </div>
        <div className="modalpolje">
        <p>ime roditelja:</p> {pacijent.roditelj}
        </div>
        <div className="modalpolje">
        <p>Uzrast pacijenta:</p> {pacijent.godine}
        </div>
        <div className="modalpolje">
        <p>Email roditelja:</p> {pacijent.email}
        </div>
        {/*<div className="doktor">
          DOKTOR: {pacijent.id_doktor}
        </div>*/}
    </div>
    </div>
    )} 
    

        {modal && (
    <div className='modal'>
    <div className='overlay' onClick={toggleModal}></div>
    <div className='content'>


      {/*<button onClick={toggleModal}>Zatvori</button>*/}
      <div className='modalpolje'>
      <input type="hidden" onInput={handleInput} name="id" value={pacijentData.id}/>
      </div>
      <div className='modalpolje'>
      <p>Ime pacijenta:</p> <input type="text"  name="name" onInput={handleInput} defaultValue={pacijentData.name}  />
      </div>
      <div className="modalpolje">  
      <p>JMBG:</p> <input type="text"  name="jmbg" onInput={handleInput} defaultValue={pacijentData.jmbg}/>
      </div>
      <div className="modalpolje">
      <p>Ime roditelja:</p> <input type="text"  name="roditelj" onInput={handleInput} defaultValue={pacijentData.roditelj}/> 
      </div>
      <div className="modalpolje">
      <p>Uzrast pacijenta: </p><input type="text"  name="godine" onInput={handleInput} defaultValue={pacijentData.godine}/>
      </div>
      <div className="modalpolje">
      <p>Email roditelja: </p><input type="text"  name="email" onInput={handleInput} defaultValue={pacijentData.email}/>
      </div>
      
      <div className='iddok'>
      <input type="hidden" onInput={handleInput} value={pacijentData.id_doktor}/>
      </div>
      
      <div className="dugmeklasa">
      <button className="izmenadugme" onClick={handleIzmena}>
        IZMENI PACIJENTA
      </button>
      </div>
    </div>
    </div>
    )}

<Outlet/>

</div>
  )
}

export default Pacijent