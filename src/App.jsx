import { animateScroll as scroll} from 'react-scroll';
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import './App.css'

import Navbar1 from './Componentes/navbar1/Navbar1'
import Hero1 from './Componentes/HeroSection/Hero1'
import Carrusel1 from './Componentes/Carrusel/carrusel1/carrusel1';
import Efecto3d1 from './Componentes/Atropos3D/efecto3d1/efecto3d1';
import PrecioCard1 from './Componentes/PrecioCards/precioCards1/precioCard1';
import Contacto1 from './Componentes/Contacto/contacto1/contacto1';
import Faq1 from './Componentes/FAQ/Faq1/faq1';
import { Helmet } from 'react-helmet';
function App() {

  function scrollear(nombre){
    scroller.scrollTo(nombre, {
      duration: 150,
      delay: 10,
      smooth: true,
      offset: -100
    });
  }
 
  const MenuItems = 
  [{name: 'Inicio',icon:'./home.png', funcion: ()=>{scrollear('inicio')}}
    ,{name: 'Precios', icon: './precios.png',funcion: ()=>{scrollear('precio')} } 
  ,{name: 'Contacto',icon:'/contacto.png', funcion: ()=>{scrollear('contacto')} }
  ,{name: 'Servicios ', funcion: null, submenu: [
                                                  {name: 'Desarrollo Web',funcion: ()=>{console.log("Desarrollo Web")}},
                                                  {name: 'Corte laser'},
                                                  {name: 'Impresión'}
                                              ]}
                                             
                                              ];
   const carouselItems = [
    <div style={{backgroundColor: 'red', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Slide 1</div>,
    <div style={{backgroundColor: 'blue', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Slide 2</div>,
    <div style={{backgroundColor: 'green', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Slide 3</div>,
    <div style={{backgroundColor: 'yellow', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Slide 4</div>,
  ];

  return (
    <>
    <Helmet>
        <title>Quetzal Virtus</title>
        
        <meta name="description" content="Diseño y desarrollo de páginas web profesionales con tecnologías modernas y soluciones personalizadas" />
        <meta name="keywords" content="desarrollo web, diseño web, sitio web, quetzal, quetzal virtus,desarrollo de aplicaciones web, diseño de interfaces de usuario, soluciones de marketing digital" />
        <link rel="canonical" href="https://quetzalvirtus.vercel.app" />
        <meta property="og:title" content="Quetzal Virtus - Desarrollo Web" />
        <meta property="og:description" content="Diseño y desarrollo de páginas web profesionales" />
        <meta property="og:image" content="https://quetzalvirtus.vercel.app/furious-eyes.png" />
        <meta property="og:url" content="https://quetzalvirtus.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Quetzal Virtus",
            "description": "Diseño y desarrollo de páginas web profesionales",
            "brand": {
              "@type": "Brand",
              "name": "Quetzal Virtus"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "MXN",
              "lowPrice": "1800",
              "highPrice": "12000"
            }
          })}
        </script>
      </Helmet>
    
    <Navbar1 MenuItems={MenuItems}/>
    <Element name='inicio'>
    <Hero1 id='hero'/>
     
    </Element>
    
    <Carrusel1
     items={carouselItems} 
     slideInterval={2000} 
     slideAmount={50}
    />
    <Faq1></Faq1>
    <Element name='precio'>
      <PrecioCard1 />
    </Element>
    
    <Element name='contacto'>
      <Contacto1></Contacto1>
    </Element>
     
    </>
  )
}

export default App
