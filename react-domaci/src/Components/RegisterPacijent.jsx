import React from 'react';
import './forme.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

const RegisterPacijent = ({token}) => {

    const [pacijentData, setPacijentData] = useState({
        name:"",
        jmbg:"",
        roditelj:"",
        godine:"", 
        email:"",
        password:"",
        id_doktor:""
    });


    function handleInput(e) {
         let newPacijentData = pacijentData;
         newPacijentData[e.target.name] = e.target.value;
         setPacijentData(newPacijentData);
    }

    //kreiranje pacijenta
    function handleRegister(e) {
        e.preventDefault();
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/registerpacijent',
            headers: {
              'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
              //'Authorization': 'Bearer '+token,
            },
            data: pacijentData,
          };
          axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            //console.log("Uspelo kreiranje pacijenta");  
            //alert("Pacijent kreiran!");
            if(response.data.success == true) {
                Swal.fire(
                'Pacijent je uspesno kreiran!' ,
              ).then(function(){
                window.location.reload();
                });
            }
            else {
                Swal.fire({
                    icon: 'error',
                    text: 'Niste uneli ispravne podatke!'
                  })
            }
           // window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
          
    }
    
    
    
    return (
        <section>
        <div className='formalogin'> 
            <form onSubmit={handleRegister} className='frm'>
                
                <div className="forma">
                <h1>KREIRANJE PACIJENTA</h1> 
                    <input 
                        type="text"
                        id="pacijentname"
                        className="polje"
                        placeholder="Unesite ime deteta"
                        onInput={handleInput}
                        name="name"
                        
                    />
                    <input 
                        type="text"
                        id="pacijentjmbg"
                        className="polje"
                        placeholder="Unesite jmbg deteta"
                        onInput={handleInput}
                        name="jmbg"
                    />
                    <input 
                        type="text"
                        id="pacijentroditelj"
                        className="polje"
                        placeholder="Unesite ime roditelja"
                        onInput={handleInput}
                        name="roditelj"
                    />
                    <input 
                        type="godine"
                        id="pacijentgodine"
                        className="polje"
                        placeholder="Unesite godine deteta"
                        onInput={handleInput}
                        name="godine"
                    />
                    <input 
                        type="email"
                        id="pacijentemail"
                        className="polje"
                        placeholder="Unesite email"
                        onInput={handleInput}
                        name="email"
                    />
                    <input 
                        type="password"
                        id="pacijentpassword"
                        className="polje"
                        placeholder="Unesite lozinku"
                        onInput={handleInput}
                        name="password"
                    />

                    <button
                        type="submit"
                        className="dugme"
                        
                    >
                    Sačuvaj pacijenta
                    </button>

                   
                </div>
            </form>
        </div>
        </section>

    );
};

export default RegisterPacijent;