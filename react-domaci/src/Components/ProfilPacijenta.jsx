import React from 'react'
import './forme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PregledPacijent from './PregledPacijent';

const ProfilPacijenta = () => {

        const [pregledi, setPregledi] = useState();
        let idpacijenta = window.sessionStorage.getItem("pacijent_user_id");

        useEffect(()=>{
        if(pregledi == null) {
            let config = {
                method: 'get',
                
                url: 'http://127.0.0.1:8000/api/pregled/'+idpacijenta,
                headers: { 
                  'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token2"), 
                  
                },
                data : pregledi
              };
              
              axios.request(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                setPregledi(response.data.pregledi);
              })
              .catch((error) => {
                console.log(error);
              });
              
        }
        }, [pregledi]
        );



    return(

        <div className="listapregleda">
        <h2>Lista pregleda</h2>
        {pregledi == null ? <></> : pregledi.map((pregled)=>(
        <PregledPacijent pregled={pregled} key={pregled.id}/>
        ))}
      </div>

    );

};

export default ProfilPacijenta;
