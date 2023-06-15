import React, { useEffect } from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Blog from './Components/Blog/Blog'
import Ab from './Components/About/Ab'
import Pocetna from './Pages/Pocetna'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginDoktor from './Components/LoginDoktor';
import LoginPacijent from './Components/LoginPacijent';
import RegisterDoktor from './Components/RegisterDoktor';
import RegisterPacijent from './Components/RegisterPacijent';
import ProfilDoktora from './Components/ProfilDoktora';
import ProfilPacijenta from './Components/ProfilPacijenta';
import { useState } from 'react';
import ListaPacijenata from './Components/ListaPacijenata'
//import Pacijent from './Components/Pacijent'
import Pregled from './Components/Pregled'
import Terapija from './Components/Terapija'
import ListaPregledaDoktor from './Components/ListaPregledaDoktor'
import TerapijaPacijenta from './Components/TerapijaPacijenta'
import TerapijaKreiranje from './Components/TerapijaKreiranje'
import ListaPregledaPacijent from './Components/ListaPregledaPacijent'
import NavbarDoktor from './Components/Navbar/NavbarDoktor'
import NavbarPacijent from './Components/Navbar/NavbarPacijent'



const App = () => {

  const [token, setToken] = useState();
  function addToken(auth_token) {
    setToken(auth_token);
  }

 
  const [token2, setToken2] = useState();
  function addToken2(auth_token2) {
    setToken2(auth_token2);
  }

  /*useEffect(()=>{
    const data = window.localStorage.getItem("auth_token_local");
    /*if(data!==null){*/
      //setToken(data);
    /*}
  })*/

  


  return (
    <BrowserRouter>
      
{/*<Navbar token={token} token2={token2} addToken={addToken} addToken2={addToken2}/>*/}    
      {token==null && token2==null ? 
      <Navbar /> :
      window.localStorage.getItem("isLogged") ? 
      <NavbarDoktor />:
      <NavbarPacijent/>
      }
      <Routes>
        
        <Route path='/' element={<Pocetna/>}></Route>
        
        <Route path='/about' element={<Ab/>}></Route>

        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/register' element={<RegisterDoktor/>}></Route> 

        <Route path='/login' element={<LoginDoktor addToken={addToken} />}/>      

    
        <Route path='/doktor' element={<ProfilDoktora/>}>

            <Route path='registerpacijent' element={<RegisterPacijent addToken={addToken}/>}/>
            <Route path='listapacijenata' element={<ListaPacijenata />}/>

            <Route path='listapregleda' element={<ListaPregledaDoktor />}/>
            <Route path='pregled' element={<Pregled addToken={addToken} />}/>

            <Route path='terapija' element={<Terapija addToken={addToken} />}></Route>

            <Route path='terapijapacijenta' element={<TerapijaPacijenta />}></Route>

            <Route path='terapijakreiranje' element={<TerapijaKreiranje />}></Route>
        
        </Route>


        <Route path='/loginpacijent' element={<LoginPacijent addToken2={addToken2} />}/> 
        
        <Route path='/pacijent' element={<ProfilPacijenta/>}>
          
            <Route path='listapregleda' element={<ListaPregledaPacijent/>}/>
          
        </Route> 

       


        {/*<Route path='/terapija' element={<Terapija addToken={addToken} />}></Route>

        <Route path='/terapijapacijenta' element={<TerapijaPacijenta />}></Route>

      <Route path='/terapijakreiranje' element={<TerapijaKreiranje />}></Route>*/}

        
      </Routes> 

    <Footer/>
      
    </BrowserRouter>
    /*<>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>*/
  )
}

export default App