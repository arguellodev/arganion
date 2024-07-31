import Atropos from 'atropos/react';
import './efecto3d1.css'
/**
 * Props de Atropos:
 * @param {string|HTMLElement} el - Elemento Atropos
 * @param {string|HTMLElement} eventsEl - Elemento para eventos de puntero
 * @param {number} activeOffset - Desplazamiento al activar (default: 50)
 * @param {boolean} alwaysActive - Siempre activo (default: false)
 * @param {number} duration - Duración de la transición en ms (default: 300)
 * @param {boolean} rotate - Habilita rotación (default: true)
 * @param {boolean|string} rotateTouch - Rotación en touch (default: true)
 * @param {number} rotateXMax - Rotación máxima en X (default: 15)
 * @param {number} rotateYMax - Rotación máxima en Y (default: 15)
 * @param {boolean} rotateXInvert - Invierte rotación X (default: false)
 * @param {boolean} rotateYInvert - Invierte rotación Y (default: false)
 * @param {number} stretchX - Estiramiento en X (default: 0)
 * @param {number} stretchY - Estiramiento en Y (default: 0)
 * @param {number} stretchZ - Estiramiento en Z (default: 0)
 * @param {boolean} commonOrigin - Origen común (default: true)
 * @param {boolean} shadow - Habilita sombra (default: true)
 * @param {number} shadowOffset - Desplazamiento de sombra (default: 50)
 * @param {number} shadowScale - Escala de sombra (default: 1)
 * @param {boolean} highlight - Habilita resaltado (default: true)
 * @param {function} onEnter - Callback al entrar
 * @param {function} onLeave - Callback al salir
 * @param {function} onRotate - Callback en rotación (x, y)
 */



const Efecto3d1 =({children})=>{


    return(
        <>
            <Atropos 
            eventsEl={document.body}
            className='my-atropos'
            alwaysActive={false}
            activeOffset={1}
            shadowOffset={0.1}
            shadowScale={1}
            onEnter={() => console.log('Enter')}
            onLeave={() => console.log('Leave')}
            onRotate={(x, y) => console.log('Rotate', x, y)}
           
            >
                
                <div className='my-atropos-contenido' 
                data-atropos-offset='1' 
                >
                    {children}
                </div>
               
                
            </Atropos>
        </>
    )
}

export default Efecto3d1;