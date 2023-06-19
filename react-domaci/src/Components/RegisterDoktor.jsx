import React from 'react';
import './forme.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import img6 from '../assets/slika4.png'


const RegisterDoktor = () => {

    const [doktorData, setDoktorData] = useState({
        name:"", 
        email:"",
        password:""
    });

    let navigate = useNavigate();

    function handleInput(e) {
         let newDoktorData = doktorData;
         newDoktorData[e.target.name] = e.target.value;
         setDoktorData(newDoktorData);
    }

    function handleRegister(e) {
        e.preventDefault(); 
        axios
        .post("http://127.0.0.1:8000/api/register",   
        doktorData)
        .then((res)=> {
            console.log(res.data);  
            navigate("/login"); 
        })
        .catch((e)=> {
            console.log(e); 
        });
    }

    return (
        <section className='containerRegister'>
        
        <div className='formalogin'>  
        <h1>Registracija doktora</h1>
            <form onSubmit={handleRegister}>
                <div className="forma">
                    <input 
                        type="text"
                        id="doktorname"
                        className="polje"
                        placeholder="Unesite Vase ime"
                        onInput={handleInput}
                        name="name"
                    />
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
                    Registrujte se
                    </button>
                </div>
            </form>
        </div>
        <div className="slikadesno">
            <img src={img6} alt="" />
        </div>
        </section>

    );
};

export default RegisterDoktor;