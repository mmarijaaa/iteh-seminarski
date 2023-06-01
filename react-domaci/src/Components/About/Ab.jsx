import React, {useEffect} from 'react'
import './about.css'
import profilna from '../../assets/profilna.JPG'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


const Ab = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='container-about'>
      <div class="red-a">

        <div class="o-meni-col">
            <img data-aos="fade-right" class="profilna" src={profilna}></img>
        </div>

        <div class="o-meni-col">
            <h1>Nešto ukratko o meni</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit distinctio porro pariatur aperiam
                dolorum ducimus illo non aliquid.
                Repellat ducimus ratione dolore cumque saepe vero expedita possimus sequi dicta.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ea velit distinctio porro pariatur aperiam dolorum ducimus
                illo non aliquid.
                Repellat ducimus ratione dolore cumque saepe vero expedita possimus sequi dicta.</p>
            <p data-aos="fade-left" class="potpis">dr Jelena Todić</p>
        </div>
      </div>
  </section>
  )
}

export default Ab