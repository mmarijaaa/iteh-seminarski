import React from 'react';
import './forme.css';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";


const ProfilDoktora = () => {

    return(

        <div className='formalogin'>
            <div className="profildoktora">

                <Link to='/doktor/registerpacijent'>Kreiraj pacijenta</Link>
                <Link to='/doktor/listapacijenata'>Lista pacijenata</Link> 

            </div>

        <Outlet/>
        </div>

        

    );

};

export default ProfilDoktora;
