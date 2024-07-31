import './hero1.css'
import Efecto3d1 from '../Atropos3D/efecto3d1/efecto3d1'
const Hero1 = ()=>{
 return(
    <>
    <section className="hero-section" id='hero-section'>
        <div className='hero-titulo'>
         <h1>Diseño y desarrollo de páginas web profesionales</h1>
        </div>
        <div className='heroimg'>
            <img className='fondo' src='./laptop.png'></img>
            <div className='efecto-tridimensional'>
            <Efecto3d1 >
            <img src='./furious-eyes.png'></img>
            
            </Efecto3d1>
            </div>
           
            
       </div>
       <div className='hero-info'>
         
         <h2>Creación de sitios Web modernos y responsivos</h2>
         <button href="#">Hacer una cotización</button>
       </div>
      
    </section>
    </>
 )
}

export default Hero1