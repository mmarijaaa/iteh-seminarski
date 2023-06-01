import React from 'react';
import './forme.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


const LoginPacijent = () => {

    const [pacijentData, setPacijentData] = useState({
        email:"",
        password:""
    });

    let navigate = useNavigate();

    function handleInput(e) {
         let newPacijentData = pacijentData;
         newPacijentData[e.target.name] = e.target.value;
         setPacijentData(newPacijentData);
    }

    function handleLogin(e) {
        e.preventDefault(); 
        axios
        .post("http://127.0.0.1:8000/api/loginpacijent",   
        pacijentData)
        .then((res)=> {
            console.log(res.data);  
            if(res.data.success === true) {
                window.sessionStorage.setItem("auth_token", res.data.access_token); 
                navigate("/profilpacijenta");
            }
        })
        .catch((e)=> {
            console.log(e);
        });
    }


    return (
        <section>
        <div className='formalogin'> 
            <form onSubmit={handleLogin}>
                <div className="forma">
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
                    Login Pacijent
                    </button>

                    <p>
                        Nemate nalog?    
                        
                        <a href='/registerpacijent'>
                            Registracija pacijenta
                        </a>
                    </p>
                </div>
            </form>
        </div>
        </section>

    );
};

export default LoginPacijent;