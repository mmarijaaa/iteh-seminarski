import React, {useEffect} from 'react'

import './home.css'
import video from '../../assets/vid1.mp4'
import scroll from '../../assets/scroll.png'

import {CiLocationOn} from 'react-icons/ci'
import {BsCalendarDate} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='home'>
      <div className="overplay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        

        <div data-aos="fade-up" className="cardDiv grid">
          

        <div className="textDiv">
          <h1 data-aos="fade-up" className='homeTitle'>
            Postanite naš pacijent
          </h1>
          <p className='podnaslov'>Dobro zdravlje i blagostanje Vašeg deteta nas je prioritet</p>
        </div>
        <button className='btn-home'>O nama</button>
        </div>
        
        <div className="homeFooterIcons flex">
          

        <a href="#" class="scroll-down">
            <img src={scroll} alt="scroll Down"></img>
        </a>
        </div>
      </div>
      
    </section>
    
  )
}

export default Home