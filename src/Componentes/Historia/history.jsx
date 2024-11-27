import './history.css';

const History = ()=>{
    return(<>
      <h1 className='titulo-history'>Nuestra historia</h1>
        <section className="history-section">
          
          <div className='history-card'>
            <div className='history-card-img-container'>
            <img src='logo.svg'></img>
            </div>
            <p className='borde'></p>
            <p className='texto-history'>Nuestro Logo representa la esencia surrealista e icónica de Argánion. La cabra, trepando por una rama del árbol de argán, simboliza curiosidad, audacia y alcanzar lo inusual, cualidades que definen a nuestro negocio</p>

          </div>

          <div className='history-card'>
          <div className='history-card-img-container'>
            <img src='goats-in-trees.svg'></img>
            </div>
            <p className='borde'></p>
            <p className='texto-history'>Estas cabras no escalan por simple instinto, sino por una motivación clara: alcanzar los frutos del argán, que tanto desean. Su tenacidad para superar cualquier obstáculo es una metáfora de nuestra filosofía de trabajo. Nos motiva su perseverancia, y la hacemos nuestra en cada proyecto que emprendemos</p>

          </div>

          <div className='history-card'>
          <div className='history-card-img-container'>
            <img src='logo-texto-negro.svg'></img>
            </div>
            <p className='borde'></p>
            <p className='texto-history'>Aquí entra el toque tecnológico. Resaltamos el "ION" para mostrar la conexión con la tecnología digital: el flujo binario de 0s y 1s, que simbolizan input/output, creatividad y eficiencia, el núcleo de lo que hacemos</p>

          </div>



        </section>
        </>
    )
}

export default History