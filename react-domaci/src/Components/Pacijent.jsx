import React from 'react'
import './forme.css'; 

const Pacijent = ({pacijent}) => {

  function handlePrikaz() {
    console.log("PRIKAZ");
  }

  function handleIzmena() {
    console.log("IZMENA");
  }

  function handleBrisanje() {
    console.log("BRISANJE"); 
  }

  return (
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


    </div>
  )
}

export default Pacijent