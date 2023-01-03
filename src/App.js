import React, {useState} from "react";
import './App.css';
import { CardsWorks } from './components/cardsworks';
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Carrousel } from './components/carrousel';
import paginamarti from './images/martipage.jpg'
import speedtest from './images/SpeedTest.png'
import roulette from './images/ruletaive.jpg'
import { Contact } from "./components/contact";
import foto from './images/foto.png'
import logotipo from './images/isologotipo.png'

function App() {

  const [stateContact, setStateContact] = useState(false)

  function abrircontacto(){
    setStateContact(!stateContact)
  }

  return (
    <>
    <div className="inicio">
      <div className="logolukis">
        <img className="isologo" src={logotipo} alt="Logo Lucas Caballero" />
      </div>
      <h1 className='title animate__animated animate__fadeInLeft'>Hi, my name is <span className='name'>LUCAS CABALLERO</span>,</h1>
      <h2 className='title2 animate__animated animate__fadeInLeft'>I'm a FRONTEND developer</h2>
      <Carrousel/>
    </div>
    <section>
      <div className='anaranjoso'>
        <h3 className='aboutme animate__animated animate__fadeIn'>ABOUT ME</h3>
        <div className='gridnaranjacontainer'>
          <div className='espacioparaimg'><div className="circulofoto"><img className="foto" src={foto} alt="" /></div></div>
          <div className='espacioparatxt'>
            <div className='textolukis'>Hi, I'm Lucas Caballero but you may also find me as "Glitchy". I'm a Front-end developer based in Santa Fe, Argentina. My passion is to develop intuitive and dynamic experiences.<br />
              I like to create unique experiences in each work, often inspired by my cultural consumption of the moment (maybe a movie, music, a podcast, etc).<br />
              I also have a background in graphic design and I use it in my web pages, as well as my skills in Motion Graphics animation.<br />
              I'm interested in many different types of projects to work on because I don't like to lock myself in my comfort zone, so don't hesitate to contact me. <br />
            </div>
        </div>
        </div>
      </div>
    <div className="skewed"></div>
  </section>
  <section>
    <div className="trabajos-div">
    <CardsWorks 
    image={roulette}
    title="LA RULETA: Un giro para la atencion de calidad"
    alt="Page Roullete"
    information='This application is a virtual board game that I made together with "IPAS Latinoamerica y el caribe", CEDES (Center for the Study of State and Society) and REDAAS (Safe Abortion Access Network). This site is only for PC as there will be a mobile app in PlayStore and AppStore. As soon as it is uploaded I will post the links here.'
    link="https://ruletaive.000webhostapp.com"
    linkgithub="https://github.com/LucasCabTG/React-Ive-Roulette"/>
        <CardsWorks 
    image={paginamarti}
    title="Portfolio Martina Cúneo"
    alt="Page Portfolio"
    information="Portfolio page realized for the illustrator, collagist and ceramist Martina Cúneo."
    link="http://martinacuneo.com/"
    linkgithub="https://github.com/LucasCabTG/martinacuneocom"/>
            <CardsWorks 
    image={speedtest}
    title="Internet SpeedTest"
    alt="Internet Speed Test"
    information="On this page you can test your internet speed. You can also see it in both MB/s and Mbps, so you don't have to do the conversion."
    link="https://testinternetspeed.000webhostapp.com"
    linkgithub="https://github.com/LucasCabTG/Internet-Speedtest"/>
    </div>

  </section>
  <section>
    <Contact
    stateContact={stateContact}
    setStateContact={setStateContact}/>
    <div className="div-diagonal">
      <div className="contact">
        <h4 className="contacto">Contact me!</h4>
        <div className='botones'>
          <a href="https://www.linkedin.com/in/lucas-caballero-700341207/" target="_blank" rel="noopener noreferrer"><button><FiLinkedin/></button></a>
          <button onClick={abrircontacto}><FiMail/></button>
          <a href="https://github.com/LucasCabTG" target="_blank" rel="noopener noreferrer"><button><FiGithub/></button></a>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}

export default App;
