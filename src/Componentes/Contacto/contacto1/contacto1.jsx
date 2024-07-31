import React, { useState, useEffect } from 'react';
import './contacto1.css';

function handleWhatsapp(telefono){
  const phoneNumber = telefono; // Reemplaza con tu número de teléfono
   
  var message = '¡Hola Quetzal Virtus! \n Busco información para crear mi página web :) \n'; // Mensaje predefinido
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


  

function handleInstagram(){
  const url = `https://www.google.com`;
  window.open(url, '_blank');
}

function handleGmail(){

}

const Contacto1 = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    empresa: '',
    mensaje: ''
  });

  const handlePhoneInput = (e) => {
    // Elimina cualquier carácter que no sea un número
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    
    // Actualiza el valor del input con solo los números
    setFormData({ ...formData, telefono: numericValue });
  };

  const handleBlur = (event) => {
    // Verifica si el toque fue fuera del input
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Si fue fuera, quita el foco
      event.currentTarget.blur();
    }
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!document.querySelector('.formulario').contains(event.target)) {
        document.activeElement.blur();
      }
    };

    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
   
   const scriptURL = 'https://script.google.com/macros/s/AKfycbx6qIiB3OnJW-cKmV7q4B7tdG86SgW5-3wEghxMYnYVJqM7EQhyO9_8fqYYO7TXG4lF/exec';
 
   try {
     const response = await fetch(scriptURL, {
       method: 'POST',
       body: JSON.stringify(formData),
       headers: {
         'Content-Type': 'text/plain',
       },
       mode: 'no-cors' // Añade esta línea
     });
 
     console.log('Datos enviados con éxito');
     // Limpia el formulario
     setFormData({
       nombre: '',
       telefono: '',
       correo: '',
       empresa: '',
       mensaje: ''
     });
     alert('Mensaje enviado con éxito!');
   } catch (error) {
     console.error('Error:', error);
     alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
   }
 };

  return (
    <>
      <section className='contacto-section'>
      <p className='contacto-section-titulo'>Contacto</p>
      <div className='contacto-cards-container'>
        <div className='contacto-card whatsapp'onClick={()=>{handleWhatsapp('+525573311728')}}>
          <div className='titulo-red-social-main'>
            <p className='titulo-red-social'>Whatsapp</p>
            <img className='logo-red-social' src='./whatsapp.svg' alt="WhatsApp logo" />
          </div>
          <p className='nombre-red-social'>+52 5573311728</p>
        </div>
        <div className='contacto-card instagram' onClick={handleInstagram}>
          <div className='titulo-red-social-main'>
            <p className='titulo-red-social'>Instagram</p>
            <img className='logo-red-social' src='./instagram.svg' alt="Instagram logo" />
          </div>
          <p className='nombre-red-social'>@QuetzalDev</p>
        </div>
      </div>
        
        <div className='formulario'>
          <div className="container">
            <div className="text">
              También puedes dejarnos tus datos
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-data">
                  <input 
                    type="text" 
                    required 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onTouchStart={(e) => e.target.focus()} 
                    onBlur={handleBlur}
                  />
                  <div className="underline"></div>
                  <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="input-data">
                  <input 
                    type="tel" 
                    required 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handlePhoneInput}
                    inputMode="numeric" 
                    onTouchStart={(e) => e.target.focus()} 
                  />
                  <div className="underline"></div>
                  <label htmlFor="telefono">Teléfono Celular</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <input 
                    type="text" 
                    required 
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    onTouchStart={(e) => e.target.focus()} 
                  />
                  <div className="underline"></div>
                  <label htmlFor="correo">Dirección de correo electrónico</label>
                </div>
                <div className="input-data">
                  <input 
                    type="text" 
                    required 
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    onTouchStart={(e) => e.target.focus()} 
                  />
                  <div className="underline"></div>
                  <label htmlFor="empresa">Nombre de tu empresa</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data textarea">
                  <textarea 
                    rows="8" 
                    cols="80" 
                    required 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    onTouchStart={(e) => e.target.focus()}
                  ></textarea>
                  <br />
                  <div className="underline"></div>
                  <label htmlFor="mensaje">Cuéntanos acerca de tu proyecto</label>
                  <br />
                  <div className="form-row submit-btn">
                    <div className="input-data">
                      <div className="inner"></div>
                      <input type="submit" value="Enviar" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto1;