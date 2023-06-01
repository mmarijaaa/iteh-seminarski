import React,  {useEffect, useRef} from 'react'
import './footer.css'

import emailjs from '@emailjs/browser'
import video2 from '../../assets/vid2.mp4'
import logo from '../../assets/logo34.png'

import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  const form = useRef();

  const posaljiMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brada6o', 'template_7nbosep', form.current, '0Opsb8UOhI3HKOeMl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };
 
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            
            
            
            <h4>MedicaMea - Kontaktirajte nas</h4>
          </div>

          <div className="inputDiv flex">
            <form ref={form} onSubmit={posaljiMail}>
              
              <input type="text" name="user_name" placeholder='Vaše ime'/>
              
              <input type="email" name="user_email" placeholder='Vaš email'/>
              
              <textarea name="message" placeholder='Poruka'/>
              <input className='btn' type="submit" value="Send" />
            </form>
            
          </div>
        </div>

        <div  className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <img src={logo} alt="" />
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ullam inventore eos
            fuga hic cum voluptatem minima, tempore
            non odio provident nobis ipsam at,
            doloremque sed cupiditate ipsum in,
            atque soluta?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
            <BsFacebook className="icon"/>
            <BsInstagram className="icon"/>
            <AiOutlinePhone className="icon"/>
            </div>

          </div>

         
        </div>
      </div>
    </section>
  )
}

export default Footer