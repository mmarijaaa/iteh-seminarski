import React from 'react';
import './forme.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const RegisterPacijent = () => {

    const [pacijentData, setPacijentData] = useState({
        name:"",
        jmbg:"",
        roditelj:"",
        godine:"", 
        email:"",
        password:""
    });

    let navigate = useNavigate();

    function handleInput(e) {
         let newPacijentData = pacijentData;
         newPacijentData[e.target.name] = e.target.value;
         setPacijentData(newPacijentData);
    }

    function handleRegister(e) {
        e.preventDefault(); 
        axios
        .post("http://127.0.0.1:8000/api/registerpacijent",   
        pacijentData)
        .then((res)=> {
            console.log(res.data);  
            navigate("/loginpacijent");
        })
        .catch((e)=> {
            console.log(e);
        });
    }


    return (
        <section>
        <div className='formalogin'> 
            <form onSubmit={handleRegister}>
                <div className="forma">
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
                    Register Pacijent
                    </button>

                   
                </div>
            </form>
        </div>
        </section>

    );
};

export default RegisterPacijent;