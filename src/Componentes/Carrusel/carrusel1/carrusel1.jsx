import React, { useState, useEffect, useRef } from 'react';
import './carrusel1.css'

const items = [{imagen: './veroveracruz.svg', funcion: ()=>{window.open('https://verodeveracruz.vercel.app', '_blank');}},
  {imagen: './veroveracruz.svg', funcion: ()=>{window.open('https://verodeveracruz.vercel.app', '_blank');}},
  {imagen: './veroveracruz.svg', funcion: ()=>{window.open('https://verodeveracruz.vercel.app', '_blank');}}
]

const Carrusel1 = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const numitems = items.length;
  const divWidth = numitems*150-50;
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const moveCarousel = () => {
      if (!isPaused && !isDragging) {
        setPosition(prevPosition => {
          if (prevPosition > window.innerWidth) {
            return -divWidth;
          }
          return prevPosition + 1.5;
        });
      }
    };

    intervalRef.current = setInterval(moveCarousel, 10);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartPosition(position);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartPosition(position);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setPosition(startPosition + diff);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setPosition(startPosition + diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setIsDragging(false);
  };

  return (
    <div 
      className='contenedor-padre' 
      style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
        <div>
           <p className='titulo-carrusel'>Algunos de nuestros clientes</p>
        </div>
      <div className="carrusel-mask">
        <div  
          ref={carouselRef}
          className='carrusel-container'
          style={{
            left: `${position}px`,
            width: `${divWidth}px`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item,index)=>(
            <div className='item' id={index} onClick={item.funcion}>
              <img src={item.imagen} />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Carrusel1;