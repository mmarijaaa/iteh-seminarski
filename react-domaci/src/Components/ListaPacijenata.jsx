import React from 'react'
import './forme.css';
import Pacijent from './Pacijent';


const ListaPacijenata=()=> {
    let pacijents;
  return (
    <div className="listapacijenata">
        <h2>Lista pacijenata</h2>
        {pacijents?.map((pacijent)=>(
        <Pacijent pacijent={pacijent} />
        ))}
    </div>
  )
}

export default ListaPacijenata