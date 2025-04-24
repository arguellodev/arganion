import { animateScroll as scroll} from 'react-scroll';
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import './App.css'

import Navbar1 from './Componentes/navbar1/Navbar1'
import Hero1 from './Componentes/HeroSection/Hero1'
import Carrusel1 from './Componentes/Carrusel/carrusel1/carrusel1';
import Servicios from './Componentes/Servicios/servicios';
import PrecioCard1 from './Componentes/PrecioCards/precioCards1/precioCard1';
import Contacto1 from './Componentes/Contacto/contacto1/contacto1';
import Faq1 from './Componentes/FAQ/Faq1/faq1';
import { Helmet } from 'react-helmet';
import History from './Componentes/Historia/history';
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
  ,{name: 'Historia',icon:'/cabra.png', funcion: ()=>{scrollear('historia')} }
  ,{name: 'Otros Servicios ', funcion: null, submenu: [
                                                  {name: 'Animación 3D',funcion: ()=>{scrollear('servicios')}},
                                                  {name: 'Diseño de Logo',funcion: ()=>{scrollear('servicios')}},
                                                  {name: 'Tarjetas de presentación',funcion: ()=>{scrollear('servicios')}}
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
        <title>Argánion - Desarrollo Web Profesional</title>
        <meta name="google-site-verification" content="PzIE7eAECcj2QJCX013PvzhHFRfOdpQoeoz05uXZu9Y" />
        <meta name="description" content="Diseño y desarrollo de páginas web profesionales con tecnologías modernas y soluciones personalizadas" />
        <meta name="keywords" content="desarrollo web, diseño web, sitio web, argán, argánion,desarrollo de aplicaciones web, arganion,diseño de interfaces de usuario, soluciones de marketing digital" />
        <link rel="canonical" href="https://arganion.vercel.app" />
        <meta property="og:title" content="Argánion - Desarrollo Web" />
        <meta property="og:description" content="Diseño y desarrollo de páginas web profesionales" />
        <meta property="og:image" content="https://arganion.vercel.app/logo.svg" />
        <meta property="og:url" content="https://arganion.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Argánion",
            "description": "Diseño y desarrollo de sitios web profesionales",
            "brand": {
              "@type": "Brand",
              "name": "Argánion"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "MXN",
              "lowPrice": "1900",
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
    <Element name='historia'>
    <History></History>
    </Element>
    
    <Element name='contacto'>
      <Contacto1></Contacto1>
    </Element>
    <Element name='servicios'>
    <Servicios></Servicios>
    </Element>
     
    </>
  )
}

export default App
