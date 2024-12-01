import './hero1.css'
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import Efecto3d1 from '../Atropos3D/efecto3d1/efecto3d1'
const Hero1 = ()=>{

   function scrollear(nombre){
      scroller.scrollTo(nombre, {
        duration: 150,
        delay: 10,
        smooth: true,
        offset: -100
      });
    }
 return(
    <>
    <section className="hero-section" id='hero-section'>
        <div className='hero-titulo'>
         <h1>Diseño y desarrollo de sitios web profesionales</h1>
        </div>
        <div className='heroimg'>
            
            <img src='./hero-laptop.svg'></img> 
            
       </div>
       <div className='hero-info'>
         
         <h2>Sube el nivel de tu negocio en una semana y a un costo accesible</h2>
         <button href="#" onClick={()=>{scrollear('precio')}}>Quiero mi sitio web</button>
       </div>
      
    </section>
    </>
 )
}

export default Hero1