import "./history.css";

const History = () => {
  return (
    <>
      <h1 className="titulo-history">Nuestra historia</h1>
      <section className="history-section">
        <div className="history-card">
          <div className="history-card-img-container">
            <img src="cabras-en-arboles.svg"></img>
          </div>
          <p className="borde"></p>
          <p className="texto-history">
            Nuestro logo representa a una cabra escalando la rama de un arbol de{" "}
            <span classname="negritas">Argán</span>, ya que su fruto es de deseo
            para ellas . La cabra, trepando por una rama del árbol de argán,
            simboliza curiosidad, audacia y alcanzar lo inusual, cualidades que
            definen a nuestro negocio. La idea fue inspirada gracias a la
            canción <span>Goats in Trees</span> de Foster The People
          </p>
        </div>
      </section>
    </>
  );
};

export default History;
