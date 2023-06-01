import React, {useEffect} from 'react'
import './main.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'

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
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Nove objave
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, artTitle, subtitle, description, readMore})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleArtical">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={artTitle}/>
                  </div>

                  <div className="cardInfo">
                    <h4 className="artTitle">{artTitle}</h4>
                    <span className="content felx">
                      <h5>{subtitle}</h5>
                      <p>{description}</p>
                      <button className='btn'><a href={readMore}>Pročitaj više</a></button>
                    </span>
                  </div>
                </div>
              )
          })
        }
      </div>

    </section>
  )
}

export default Main