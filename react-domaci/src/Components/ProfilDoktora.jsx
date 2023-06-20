import React from 'react';
import './forme.css';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";


const ProfilDoktora = () => {

    return(

        <div className='pocetna'>
            <div className="linkovi">

                <Link className="link" to='/doktor/registerpacijent'>Kreiraj pacijenta</Link>
                <Link className="link" to='/doktor/listapacijenata'>Lista pacijenata</Link> 

            </div>

        <Outlet/>
        </div>

        

    );

};

export default ProfilDoktora;
