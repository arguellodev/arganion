import "./servicios.css";

const Servicios = () => {
  function handleCotizar(mensaje) {
    const phoneNumber = "+525573311728"; // Reemplaza con tu número de teléfono

    var message = `¡Hola Argánion! \n Me interesa obtener ${mensaje} para mi negocio. ¿Me podrias dar información? \n`; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <section className="services-section">
      <h1 className="section-services-title">Otros servicios</h1>
      <div className="services-cards-container">
        <div className="service-card">
          <img src="servicio-3d.png" alt="Animación 3D" />
          <h2>Animación 3D</h2>
          <p>
            Creación de animaciones 3D con efectos realistas para proyectos
            audiovisuales, videojuegos y presentaciones.
          </p>
          <button onClick={() => handleCotizar("una animación 3D")}>
            Cotizar
          </button>
        </div>
        <div className="service-card">
          <img src="servicio-logo.png" alt="Diseño de Logos" />
          <h2>Diseño de Logos</h2>
          <p>
            Diseño de logotipos únicos y personalizados para reforzar la
            identidad de tu marca.
          </p>
          <button onClick={() => handleCotizar("un diseño de Logo")}>
            Cotizar
          </button>
        </div>
        <div className="service-card">
          <img src="servicio-tarjetas.png" alt="Tarjetas de Presentación" />
          <h2>Tarjetas de Presentación</h2>
          <p>
            Diseño creativo y profesional de tarjetas para causar la mejor
            impresión en tus contactos.
          </p>
          <button onClick={() => handleCotizar("tarjetas de presentación")}>
            Cotizar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
