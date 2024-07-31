import './faq1.css';
import React, { useState } from 'react';



const features = [
    { 
        imagen: 'diseno-responsivo.png', 
        titulo: 'Diseño Responsivo', 
        info: 'Aseguramos que tu página se vea y funcione perfectamente en cualquier dispositivo.', 
        infocompleta: 'Aseguramos que tu página se vea y funcione perfectamente en cualquier dispositivo, ya sea móvil, tablet o computadora de escritorio.' 
    },
    { 
        imagen: 'pagina-rapida.png', 
        titulo: 'Carga Rápida', 
        info: 'Optimización del rendimiento para asegurar tiempos de carga rápidos.', 
        infocompleta: 'Optimización del rendimiento para asegurar tiempos de carga rápidos, mejorando la experiencia del usuario y el SEO. No usamos pagina prefabricadas como Wix o Wordpress, tu página sera 100% código JavaScript con React como su principal libreria' 
    },
    { 
        imagen: 'seo.png', 
        titulo: 'SEO Optimizado', 
        info: 'Mejoramos la visibilidad de tu página en los resultados de búsqueda de Google.', 
        infocompleta: 'Ofrecemos servicios de optimización para motores de búsqueda (SEO) para mejorar la visibilidad de tu página en los resultados de búsqueda de Google.' 
    },
    { 
        imagen: 'disenador.png', 
        titulo: 'Diseños Personalizados', 
        info: 'Proyectos únicos y personalizados según las necesidades del cliente.', 
        infocompleta: 'Proyectos de diseño únicos y personalizados según las necesidades y preferencias del cliente, destacando la creatividad y originalidad. Cada imagen o ilustración de tu página sera 100% original y no sacada del internet.' 
    },
    { 
        imagen: 'seguridad.png', 
        titulo: 'Seguridad', 
        info: 'Cumplimos con los más altos estándares de seguridad.', 
        infocompleta: 'Aseguramos que todas las páginas web cumplan con los más altos estándares de seguridad, incluyendo certificados SSL y medidas de protección contra ataques.' 
    },
    { 
        imagen: 'buen-precio.png', 
        titulo: 'Precios Claros y Competitivos', 
        info: 'Presentamos una estructura de precios transparente y competitiva.', 
        infocompleta: 'Presentamos una estructura de precios transparente y competitiva que refleje el valor y la calidad de los servicios ofrecidos. No te ofreceremos hosting o dominios a sobreprecio, es por ello que te damos la opción de tener un hosting gratuito y solo pagas el diseño y desarrollo de tu sitio web.' 
    }
];


const Faq1 = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className='faq-section'>
            <p className='faq-section-titulo'>¿Por qué Elegirnos?</p>
            
            <div className='faq-card-container'>
                {features.map((feature, index) => (
                    <div key={index} className='faq-card'>
                        <img className='faq-img' src={feature.imagen} alt={feature.titulo} />
                        <p className='faq-card-titulo'>{feature.titulo}</p>
                        <p className='faq-card-info'>
                            {expandedIndex === index && feature.infocompleta ? feature.infocompleta : feature.info}
                        </p>
                        {feature.infocompleta && (
                            <button onClick={() => toggleExpand(index)}>
                                {expandedIndex === index ? 'Ver menos ▲' : 'Ver más ▼'}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq1;
