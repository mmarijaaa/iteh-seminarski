import React, {useEffect} from 'react'
import './kontakt.css'
import Aos, { init } from 'aos'
import tel from '../../assets/tel.png'
import lok from '../../assets/loc.png'
import email from '../../assets/env.png'
import insta from '../../assets/instagram.png'
import fb from '../../assets/fb.png'
import time from '../../assets/clock.png'


const Kontakt = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])
    return (
        <div className="kontakt">

            <div className="kontaktslika">
              <div className="ktekst">
                <h1 id='podvuceno'>Kontakt</h1>
              </div>
            </div>

           
            <div className="info">

                <div className="telefoni">
                    <div className="slicica">
                        <img src={tel} alt=""/>
                    </div>
                    <div className="txttel">
                        <p><b>TELEFON</b></p>
                        <p>Fiksni:</p>
                        <p>011 1234 567</p>
                        <p>Jelena:</p>
                        <p>060 1234 567</p>
                        <p>Ana:</p>
                        <p>061 1234 567</p>
                        <p>Jovana:</p>
                        <p>o62 1234 567</p>
                    </div>
                </div>

                <div className="ostalo">
                   <div className="adresa">
                        <div className="slicica">
                            <img src={lok} alt=""/>
                        </div>
                        <div className="txtadr">
                            <p><b>ADRESA</b></p>
                            <p>Jove Ilića 154, Voždovac</p>
                            <p>11000 Beograd</p>
                        </div>
                   </div>
                   <div className="vreme">
                            <div className="slicica">
                                <img src={time} alt=""/>
                            </div>
                            <div className="txt">
                                <p><b>RADNO VREME</b></p>
                                <p>Pon - Pet:</p>
                                <p>9h - 21h</p>
                                <p>Sub - Ned:</p>
                                <p>9h - 15h</p>
                            </div>
                        </div>
                  
                </div>

                <div className="drustvenemreze">
                        <div className="insta">
                            <div className="slicica">
                                <img src={insta} alt=""/>
                            </div>
                            <div className="txt2">
                                <p><b>INSTAGRAM</b></p>
                                <p>medicamea_pedijatrija</p>
                            </div>
                        </div>
                        <div className="fb">
                            <div className="slicica">
                                <img src={fb} alt=""/>
                            </div>
                            <div className="txt2">
                                <p><b>FACEBOOK</b></p>
                                <p>MedicaMea Pedijatrija</p>
                            </div>
                        </div>
                        <div className="email">
                        <div className="slicica">
                            <img src={email} alt=""/>
                        </div>
                        <div className="txt2">
                            <p><b>EMAIL</b></p>
                            <p>medicamea@gmail.rs</p>
                        </div>
                   </div>
                        
                </div>

            </div>
           

            <div className="mapa">
                <iframe id="mapaslika"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.397016738454!2d20.475035100000003!3d44.7727108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a705762332ab5%3A0x422a527f1ff25cac!2z0IjQvtCy0LUg0JjQu9C40ZvQsCAxNTQsINCR0LXQvtCz0YDQsNC0IDExMDAw!5e0!3m2!1ssr!2srs!4v1687104658891!5m2!1ssr!2srs" ></iframe>
            </div>

            

            

        </div>
    )
}

export default Kontakt