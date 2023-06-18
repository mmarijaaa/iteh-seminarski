import React, {useEffect} from 'react'
import './about.css'
import profilna from '../../assets/profilna.JPG'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
import dr1 from '../../assets/jelena.JPG'
import dr2 from '../../assets/ana.jpg'
import dr3 from '../../assets/jovana.jpg'

const Ab = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='container-about'>
      {/*<div class="red-a">

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
      </div>*/}
      <div className="onama">

        <div className="onamatekst">
          <div className="onamanaslov">
              <h1>O </h1><h1 id='namapodvuceno'>nama</h1>
          </div>
        </div>

        <div className="onamapasus">
              <p>
                Dr Jelena Todić je vlasnik i osnivač pedijatrijske ordinacije MedicaMea. 
                U timu zaposlenih se pored Dr Jelene Todić
                nalaze i dva pedijatra sa dugogodišnjim iskustvom - Dr Ana Gabrica i Dr Jovana Milenković. 
                Ordinacija je osnovana 2015. godine kako bi se u prijatnom ambijentu i na jednom mestu objedinilo 
                znanje i iskustvo najboljih strucnjaka iz razlicitih oblasti pedijatrije. 
                Prostor je lep i prijatan, pa pregled u kome dete učestvuje učini da mali pacijenti nemaju problem i strah od doktora.
                Ordinacija je opremljena i u potpunosti spremna da zbrine sva stanja koja se u pedijatriji mogu označiti kao hitna.
              </p>
          </div>


        <div className="nastimnaslov">
            <h1>Naš</h1> <h1 id='namapodvuceno'>tim</h1> 
        </div>
        <div className="tim">

          <div className="dok1">
              <div className="dokslika">
                  <img src={dr1} alt=""/>
              </div>
              <div className="dokopis">
                  <div className="dokime">
                    <h3>Dr Jelena Todić, pedijatar</h3>
                    </div>
                  <div className="doktxt">
                    <p>
                    Dr Jelena Todic završila je Medicinski fakultet Univerziteta u Beogradu.  
                    Specijalizirala je na Univerzitetskoj dečijoj klinici u Tiršovoj. 
                    Radila je u Sloveniji u Opštoj bolnici u Celju, a zatim u Domu zdravlja na Čukarici. 
                    Dr Jelena Todic je čitav svoj radni vek u pedijatrijskoj službi, na svim nivoima rada: 
                    kućne posete novorođenčetu, preventivni rad u savetovalištu sa decom svih uzrasta, 
                    pregledi, dijagnostika i lečenje bolesne dece, rad u Razvojnom savetovalištu
                    </p>
                  </div>
                  <div className="dokpotpis1">
                    <p>Dr Jelena Todić</p>
                  </div>
              </div>
          </div>

          <div className="dok2">
              <div className="dokopis2">
                  <div className="dokime">
                    <h3>Dr Ana Gabrica, pedijatar</h3>
                  </div>
                  <div className="doktxt">
                    <p>
                    Osnovnu školu i  gimnaziju je završila u Beogradu.
                    Diplomirala je na Medicinskom fakultetu Univerziteta u Beogradu u septembru 2017. godine.  
                    Obavezni lekarski staž je završila u Domu zdravlja Rakovica i KBC „Dr Dragiša Mišović“. 
                    Stručni ispit je položila u maju 2018. godine.Od oktobra 2018. godine je na specijalizaciji 
                    iz pedijatrije na Medicinskom fakultetu u Beogradu. Specijalistički staž obavlja u 
                    Univerzitetskoj dečjoj klinici, u Beogradu.
                    </p>
                  </div>
                  <div className="dokpotpis2">
                    <p>Dr Ana Gabrica</p>
                  </div>
              </div>
              <div className="dokslika">
                  <img src={dr2} alt=""/>
              </div>
          </div>

          <div className="dok3">
              <div className="dokslika">
                  <img src={dr3} alt=""/>
              </div>
              <div className="dokopis">
                  <div className="dokime">
                    <h3>Dr Jovana Milenković, pedijatar</h3>
                  </div>
                  <div className="doktxt">
                    <p>
                    Rođena 10.1.1974. god u Ivanjici. Medicinski fakultet završila 2001. god. u Beogradu.
                    Specijalistički ispit iz pedijatrije položila 2011. god. sa odličnim uspehom.
                    Radila je u Domu zdravlja "Dr Simo Milošević" Čukarica i bila konsultant u ordinaciji MedicaMea od osnivanja, 
                    gde 2018. godine postaje član tima stalno zaposlenih ordinacije. 
                    Od 2002. do 2011. radila u dečjem dispanzeru Doma zdravlja Ivanjica.
                    </p>
                  </div>
                  <div className="dokpotpis3">
                    <p>Dr Jovana Milenković</p>
                  </div>
              </div>
          </div>
        </div>

      </div>
  </section>
  )
}

export default Ab