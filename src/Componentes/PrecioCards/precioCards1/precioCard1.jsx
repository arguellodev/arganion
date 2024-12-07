import React, { useState } from 'react';
import './preciocard1.css';

function handlePaquete(telefono,mensaje){
    const phoneNumber = telefono; // Reemplaza con tu número de teléfono
     
    var message = `¡Hola Argánion! \n Me interese obtener una ${mensaje} para mi negocio. ¿Me podrias dar información? \n`; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

const paquetes = [
    {
        nombre: 'Landing Page',
        imagenPrincipal: './landing-page.png',
        precioOferta: 1499,
        razonOferta: 'Descuento fin de año',
        precio: 1900,
        información: 'Ideal para pequeñas empresas y freelancers que necesitan una presencia en línea básica.',
        caracteristicas: [
            { info: 'Certificado SSL',imagen:'./proteger.png' },
            { info: 'Página informatíva', imagen: './atractivo.png' },
            { info: 'Enlaces rápidos a redes sociales', imagen: './redes-sociales.png' },
            { info: 'Mantenimiento por  6 meses sin costo adicional', imagen: './mantenimiento.png' },
        ],
        tipo: 'secundaria'
    },
    {
        nombre: 'E-commerce',
        imagenPrincipal: './ecommerce.png',
        precio: 3900,
        precioOferta: 2999,
        información: 'Ideal para negocios que venden diversos artículos y buscan una venta rápida de estos',
        caracteristicas: [
            { info: 'Certificado SSL', imagen: './proteger.png'  },
            { info: 'Catalogo en línea', imagen: './catalogar.png' },
            { info: 'Base de Datos', imagen: './dato.png' },
            { info: 'Gestión de inventario', imagen: './inventario.png' },
            { info: 'Mantenimiento por  1 año sin costo adicional', imagen: './mantenimiento.png' },
        ],
        tipo: 'principal'
    },
    {
        nombre: 'Portal de membresía',
        imagenPrincipal: './portal-membresia.png',
        precio: 6790,
        información: 'Sitios web que ofrecen contenido exclusivo y acceso restringido a usuarios que se suscriben o pagan una membresía',
        caracteristicas: [
            { info: 'Certificado SSL', imagen: './proteger.png' },
            { info: 'Inicio de Sesión', imagen: './acceso.png' },
            { info: 'Cobro automático', imagen: './cobro.png' },
            { info: 'Mantenimiento por  1 año sin costo adicional', imagen: './mantenimiento.png' },
        ],
        tipo: 'secundaria'
    }
    
    // Añade más paquetes según sea necesario
];

const PrecioCard1 = () => {
    const [selectedHosting, setSelectedHosting] = useState('Vercel');

    const handleHostingClick = (hosting) => {
        setSelectedHosting(hosting);
    };

    return (
        <>
            <section className='cards-section'>
                <div className='cards-titulo-container'>
                    <p className='titulo-principal'>Precios</p>
                    
                </div>

                <div className='cards-container'>
                    {paquetes.map((paquete, index) => (
                        <div key={index} className={`card ${paquete.tipo}`}>
                            <div className='card-titulo-main'>
                                <p className='card-titulo'>{paquete.nombre}</p>
                                <img className='card-imagen' src={paquete.imagenPrincipal} alt={paquete.nombre}></img>
                            </div>
                            {paquete.precioOferta 
                            && 
                            <div className='offer-container'>
                                <p className='texto-oferta'>Oferta</p>
                                <p className='card-precio'>${selectedHosting === 'Vercel'? paquete.precioOferta.toLocaleString('es-MX') : (paquete.precioOferta + 3000).toLocaleString('es-MX') }</p>
                                
                            </div>
                            }
                            {paquete.precioOferta 
                            ? <p className='card-precio-descuento'>${selectedHosting === 'Vercel'? paquete.precio.toLocaleString('es-MX') : (paquete.precio + 3000).toLocaleString('es-MX') }</p>
                            : <p className='card-precio'>${selectedHosting === 'Vercel'? paquete.precio.toLocaleString('es-MX') : (paquete.precio + 3000).toLocaleString('es-MX') }</p>
                            }
                            
                            <div className='card-hosting'>
                                <p className='hosting-titulo'>Elige el tipo de hosting:</p>
                                <div className='hosting-opciones'>
                                    <button
                                        className={selectedHosting === 'Vercel' ? 'hosting-seleccionado' : ''}
                                        onClick={() => handleHostingClick('Vercel')}
                                    >
                                        Vercel <img src='./vercel.svg'/>
                                    </button>
                                    <button
                                        className={selectedHosting === 'Hostinger' ? 'hosting-seleccionado' : ''}
                                        onClick={() => handleHostingClick('Hostinger')}
                                    >
                                        Hostinger <img src='./hostinger.svg'/>
                                    </button>
                                </div>
                            </div>
                            <p className='card-info'>{paquete.información}</p>
                            <div className='card-caracteristicas'>
                                <ul>
                                    {paquete.caracteristicas.map((caracteristica, idx) => (
                                        <li key={idx}>
                                            <div className='icono-lista'></div>
                                            <p>{caracteristica.info}</p>
                                            
                                            {caracteristica.imagen && <img src={caracteristica.imagen} alt={caracteristica.info} />}
                                        </li>
                                    ))}
                                    
                                </ul>

                                {selectedHosting === 'Vercel'
                                    ? 
                                     <div className='hosting-features-container'>
                                        <div className='hosting-features-titulo'>
                                            <div className='linea-div'></div>
                                            <p>Vercel</p><img src='./vercel.svg'/>
                                            <div className='linea-div'></div>
                                            
                                        </div>
                                        <div className='hosting-features'>
                                            <ul>
                                                <li>
                                                    <div className='icono-lista'></div>
                                                    <p>Hosting y dominio gratuitos</p>
                                                </li>
                                                <li>
                                                    <div className='icono-lista'></div>
                                                    <p>Tu dominio terminara en <span style={{fontFamily: 'revert-layer', color:'gray'}}>vercel.app</span></p>
                                                </li>
                                                <li>
                                                    <div className='icono-lista'></div>
                                                    <p>Recursos límitados</p>
                                                </li>
                                               
                                                
                                            </ul>
                                        </div>
                                           
                                     </div>
                                    : 
                                    <div className='hosting-features-container'>
                                        <div className='hosting-features-titulo'>
                                            <div className='linea-div'></div>
                                            <p>Hostinger</p><img src='./hostinger.svg'/>
                                            <div className='linea-div'></div>
                                            
                                        </div>
                                        <div className='hosting-features'>
                                        <ul>
                                                <li>
                                                    <div className='icono-lista'></div>
                                                    <p>4 años de Hosting incluidos</p>
                                                </li>
                                                <li>
                                                    <div className='icono-lista'></div>
                                                    <p>Renta de Dominio pagada por 1 año</p>
                                                </li>
                                                <li>
                                                    <div className='icono-lista'></div>
                                                    <p>Mayores recursos</p>
                                                </li>
                                                <li>
                                                    <div className='icono-lista'></div>
                                                    <p>Mejor personalización de nombre de dominio</p>
                                                </li>
                                               
                                               
                                                
                                            </ul>
                                        </div>
                                           
                                     </div>
                                    }
                            </div>
                            <button className='card-boton' onClick={()=>{handlePaquete('+525573311728',paquete.nombre)}}></button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default PrecioCard1;
