import React from 'react';
import './forme.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import PocetnaMeni from './PocetnaMeni';
import Swal from 'sweetalert2';

const LoginDoktor = ({addToken}) => {

    const [doktorData, setDoktorData] = useState({
        email:"",
        password:""
    });

    const[error, setError] = useState();

    

    let navigate = useNavigate();

    function handleInput(e) {
         let newDoktorData = doktorData;
         newDoktorData[e.target.name] = e.target.value;
         setDoktorData(newDoktorData);
    }

    function handleLogin(e) {
        e.preventDefault(); 
        axios
        .post("http://127.0.0.1:8000/api/login",   
        doktorData)
        .then((res)=> {
            console.log(res.data);  
            if(res.data.success === true) {
                window.sessionStorage.setItem("auth_token", res.data.access_token);
                window.localStorage.setItem("auth_token_local", res.data.access_token);
                //window.localStorage.setItem("refresh", res.data.access_token);
                window.sessionStorage.setItem("user_id", res.data.user_id);
                window.sessionStorage.setItem("isLogged", res.data.success);
                addToken(res.data.access_token);
                navigate("/doktor"); 
            }
            else {
                console.log("greska");
                Swal.fire({
                    icon: 'error',
                    text: 'Niste uneli ispravne podatke!'
                  })
            }
        })
        .catch((e)=> {
            
            console.log(e.response.error);
          
        });
    }


    return (
        <section>

        <PocetnaMeni/>

            
        <div className='formalogin'> 
        <h1>Prijava doktora</h1>

            {/*error ? {error} : <></>*/}

            <form onSubmit={handleLogin}>
                <div className="forma">
                    
                    <input 
                        type="email"
                        id="doktoremail"
                        className="polje"
                        placeholder="Unesite email"
                        onInput={handleInput}
                        name="email"
                    />
                    
                    <input 
                        type="password"
                        id="doktorpassword"
                        className="polje"
                        placeholder="Unesite lozinku"
                        onInput={handleInput}
                        name="password"
                    />
                    
                    <button
                        type="submit"
                        className="dugme"
                    >
                    Prijavite se
                    </button>

                    <p>
                        Nemate nalog?    
                        
                        <a href='/register'>
                            Registracija doktora
                        </a>
                    </p>
                </div>
            </form>
        	
        </div>
        </section>

    );
};

export default LoginDoktor;