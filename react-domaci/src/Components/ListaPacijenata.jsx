import React, { useReducer } from 'react'
import './forme.css';
import Pacijent from './Pacijent';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';


const ListaPacijenata = () => {
    const [pacijents, setPacijents] = useState();
    const [search, setSearch] = useState('');

    console.log(search);

    let iddok = window.sessionStorage.getItem("user_id");
    useEffect(()=>{
      if(pacijents == null) {
        /*axios
        .get('http://127.0.0.1:8000/api/doktor/'+ iddok) 
        .then((res)=>{ 
        console.log(res.data);
        setPacijents(res.data.pacijenti);
        });*/

        var config = {
          method: 'get',
          url: 'http://127.0.0.1:8000/api/doktor/'+iddok,
          headers: { 
            'Authorization': 'Bearer '+window.localStorage.getItem("auth_token_local"), 
            
          },
          data : pacijents
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setPacijents(response.data.pacijenti);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }, [pacijents]
    );
   
  

  return (
    <div className="listapacijenata">
        <h1>Lista pacijenata</h1>
        <div className='pretragaKlasa'><input type='text' className='pretraga' placeholder='Pretraži pacijente' onChange={(e) => setSearch(e.target.value)}></input></div>
        
        {pacijents == null ? 
          <div></div> 
        : pacijents.filter((pacijent) => {
          return search.toLowerCase() === ''  
          ? pacijent
          : pacijent.name.toLowerCase().includes(search);
        }).map((pacijent)=>(

        <Pacijent pacijent={pacijent} key={pacijent.id}/>

        ))}

      
    </div> 
  )
}
 
export default ListaPacijenata;