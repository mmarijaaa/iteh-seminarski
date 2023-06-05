import React from 'react'
import './forme.css';
import Pacijent from './Pacijent';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ListaPacijenata = () => {
    const [pacijents, setPacijents] = useState();
    let iddok = window.sessionStorage.getItem("user_id");
    useEffect(()=>{
      if(pacijents == null) {
        axios
        .get('http://127.0.0.1:8000/api/doktor/'+ iddok)
        .then((res)=>{ 
        console.log(res.data);
        setPacijents(res.data.pacijenti);
        });
      }
    }, [pacijents]
    );
   

  return (
    <div className="listapacijenata">
        <h2>Lista pacijenata</h2>
        {pacijents == null ? <div><h2>NEMA PACIJENATA</h2></div> : pacijents.map((pacijent)=>(
        <Pacijent pacijent={pacijent} key={pacijent.id}/>
        ))}
    </div> 
  )
}
 
export default ListaPacijenata;