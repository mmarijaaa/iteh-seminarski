import React from 'react'
import './forme.css';
import { useState } from 'react';
import axios from 'axios'; 

const Terapija = ({terapija, token}) => {

    const [terapijaData, setTerapijaData] = useState({
        //id_pregled:terapija.id_pregled,
        //id_doktor:terapija.id_doktor,
        //id_pacijent:terapija.id_pacijent,
        lekovi: terapija.lekovi,
        nacin_primene: terapija.nacin_primene,
        komentar:terapija.komentar
      });

    function handleInput(e) {
        let newTerapijaData = terapijaData;
        newTerapijaData[e.target.name] = e.target.value;
        setTerapijaData(newTerapijaData);
    } 

    /*function handleSacuvajTerapiju(e) {

        e.preventDefault();

        let idpregleda = window.sessionStorage.getItem("pregled_id");
        let idpacijenta = window.sessionStorage.getItem("pacijent_id");

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/terapijapacijent/'+ idpregleda + '/' + idpacijenta,
            headers: {
              'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
            },
            data: terapijaData,
          };
      
          axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            alert("Pregled evidentiran!"); 
            
          })
          .catch((error) => {
            console.log(error);
          });
    }*/

    function handleIzmeniTerapiju(e) {

      e.preventDefault();
     var config = {
        method: 'put',
        
        url: 'http://127.0.0.1:8000/api/izmenaterapija'+terapija.id,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + window.sessionStorage.getItem("auth_token")
        },
        data : terapijaData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

      })
      .catch((error) => {
        console.log(error);
      });
  }

    return (

        <div className="formapregled">

        <div className="pregled"><h1>TERAPIJA</h1></div>

        <div className="datumpregleda" >
            NAZIV: {terapija.lekovi}
        </div>
        <div className="datumpregleda" >
            NACIN PRIMENE: {terapija.nacin_primene}
        </div>
        <div className="datumpregleda" >
            KOMENTAR: {terapija.komentar}
        </div>

      
        <div className='izmenaterapija'>
        <div className="pregled"><h1>IZMENA TERAPIJA</h1></div>

            <div className="datumpregleda" >
                <input type="text" name="lekovi" onInput={handleInput} defaultValue={terapijaData.lekovi}/>
            </div>
            <div className="datumpregleda" >
                <input type="text" name="nacin_primene" onInput={handleInput} defaultValue={terapijaData.nacin_primene}/>
            </div>
            <div className="datumpregleda" >
                <input type="text" name="komentar" onInput={handleInput} defaultValue={terapijaData.komentar}/>
            </div>

            <button onClick={handleIzmeniTerapiju}>
                IZMENI TERAPIJU
            </button>

        </div>

        </div>
    )

}

export default Terapija
