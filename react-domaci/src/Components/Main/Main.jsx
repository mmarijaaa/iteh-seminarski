import React, {useEffect} from 'react'
import './main.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import slika1 from '../../assets/slika1.jpg'
import slika2 from '../../assets/slika2.jpg'
import slika3 from '../../assets/slika3.jpg'
import ikonica1 from '../../assets/nutritionist.png'
import ikonica2 from '../../assets/blood-test.png'
import ikonica3 from '../../assets/check-up.png'


import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    artTitle: 'Lorem ipsum',
    subtitle: 'Podnaslov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. ',
    readMore: '#'
    },
    {
    id: 2,
    imgSrc: img2,
    artTitle: 'Lorem ipsum',
    subtitle: 'Podnaslov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. ',
    readMore: '#'
    },
    {
    id: 3,
    imgSrc: img3,
    artTitle: 'Lorem ipsum',
    subtitle: 'Podnaslov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. ',      readMore: '#'
    },
    {
      id: 4,
      imgSrc: img4,
      artTitle: 'Lorem ipsum',
      subtitle: 'Podnaslov',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. ',      readMore: '#'
      },
    {
      id: 5,
      imgSrc: img5,
      artTitle: 'Lorem ipsum',
      subtitle: 'Podnaslov',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. ',      readMore: '#'
      },
    {
      id: 6,
      imgSrc: img6,
      artTitle: 'Lorem ipsum',
      subtitle: 'Podnaslov',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. ',      readMore: '#'
        },
    
  
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="">
    <section className='main container section'>

      <div className="secContent grid">
        <div className="title">
          <h2>Za bezbrižno odrastanje  </h2>
          <h2 className='podvuceno'> Vašeg deteta</h2>
        </div>
        <div className="tekst">
          <p>Naša je želja da uživate u bezbrižnom odrastanju Vašeg deteta, a mi u Pedijatrijskoj ordinaciji <i>Medica Mea</i> smo tu da Vam budemo podrška kada Vam zatreba pomoć.
          Pedijatrijska ordinacija <i>MedicaMea</i> je osnovana kako bi se u prijatnom ambijentu i na jednom mestu objedinilo znanje i iskustvo najboljih stručnjaka iz različitih oblasti pedijatrije.  O zdravlju Vaših najmilijih brinuće iskusni pedijatri, kliničari sa višegodišnjim iskustvom. 
          </p>
        </div>
      </div>
    </section>

    <section className="galerijaSlider">
      <div className="slider-wrapperr">
        <div className="slider">
          <img id='slide1' src={slika1} alt="" />
          <img id='slide2' src={slika2} alt="" />
          <img id='slide3'  src={slika3} alt="" />
        </div>
        <div className="slider-nav">
          <a href="#slide1"></a>
          <a href="#slide2"></a>
          <a href="#slide3"></a>
        </div>
      </div>
    </section>

    <section className='ikonice-grupa'>
      <div className="ikonice">

        <div className="i1">
          <div className="islika">
            <img className='iikonica' src={ikonica1} alt="" />
          </div>
          <div className="inaslov">
            <h3>ISKUSNI PEDIJATRI</h3>
          </div>
          <div className="itekst">
            <p>
              U timu nalazi se tri pedijatra 
              sa dugogodišnjim iskustvom koji se brinu o 
              zdravlju vašeg deteta
            </p>
          </div>
        </div>

        <div className="i2">
          <div className="islika">
            <img className='iikonica' src={ikonica2} alt="" />
          </div>
          <div className="inaslov">
            <h3>BRZA LAB DIJAGNOSTIKA</h3>
          </div>
          <div className="itekst">
            <p>
              CRP i krvna slika iz kapi iz prsta, brzi test 
              na Streptokoke, alergološko testiranje 
            </p>
          </div>
        </div>

        <div className="i3">
          <div className="islika">
            <img className='iikonica' src={ikonica3} alt="" />
          </div>
          <div className="inaslov">
            <h3>NAJBOLJI KONSULTANTI</h3>
          </div>
          <div className="itekst">
            <p>
              Konsultanti iz svih oblasti omogucavaju rešavanje specifičnih bolesti kod dece 
              i odraslih
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Main