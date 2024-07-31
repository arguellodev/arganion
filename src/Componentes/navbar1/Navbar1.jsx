import React, { useState, useRef, useEffect } from 'react';
import './navbar1.css'

const Navbar1 = ({ MenuItems }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [openCheckbox, setOpenCheckbox] = useState(null); // Estado para el checkbox abierto
  const menuRef = useRef(null); // Referencia al menú

  useEffect(() => {
    // Función para manejar el clic fuera del menú
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Desmarcar todos los checkboxes al hacer clic fuera del menú
        const checkboxes = document.querySelectorAll('.submenu-toggle');
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
        setOpenCheckbox(null); // Reiniciar estado de checkbox abierto
        setMenuAbierto(false); // Cerrar menú principal
      }
    };

    // Agregar el evento de clic al documento
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Remover el evento al desmontar el componente
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Función para manejar el clic en un checkbox
  const handleCheckboxClick = (checkboxId) => {
    if (checkboxId === openCheckbox) {
      setOpenCheckbox(null); // Si se hace clic en el checkbox abierto, cerrarlo
    } else {
      setOpenCheckbox(checkboxId); // Abrir el nuevo checkbox
    }
  };

  // Función para manejar el clic en un elemento <li> del menú principal
  const handleMenuItemClick = () => {
    // Desmarcar todos los checkboxes al hacer clic en cualquier elemento <li> del menú principal
    const checkboxes = document.querySelectorAll('.submenu-toggle');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    setOpenCheckbox(null); // Reiniciar estado de checkbox abierto
    setMenuAbierto(false); // Cerrar menú principal
  };

  // Función para manejar el clic en un elemento <li> del submenú
  const handleSubmenuItemCLick = (submenuId) => {
    // Cerrar submenú al hacer clic en un elemento dentro de él
    setOpenCheckbox(null); // Reiniciar estado de checkbox abierto
    setMenuAbierto(false); // Cerrar menú principal en versiones móviles
    document.getElementById(submenuId).checked = false; // Desmarcar el checkbox del submenú
  };

  return (
    <header>
    <nav ref={menuRef}>
      
      <div className='logo-navbar-container'>
      <img className='logo-navbar' src='./furious-eyes.png' ></img>
      <p>Quetzal Virtus</p>
      </div>
      <input
        className="menu_checkbox"
        type="checkbox"
        id="menu"
        checked={menuAbierto}
        onChange={() => setMenuAbierto(!menuAbierto)}
      />
      <label className="boton-menu" htmlFor="menu">{menuAbierto ? '✕' : '☰'}</label>

      <ul>
        {MenuItems.map((item, index) => (
         
         
         <li 
         key={index} 
         onClick={() => {
           if (!item.submenu) {
             handleMenuItemClick();
           }
           if (item.funcion) {
             item.funcion();
           }
         }}
       >
       
            {item.submenu ? (
              <>
                <input
                  type="checkbox"
                  id={item.name}
                  className='submenu-toggle'
                  checked={openCheckbox === item.name}
                  onChange={() => handleCheckboxClick(item.name)}
                />
                <label htmlFor={item.name} className='label-submenu'>
                  <span className='icono-submenu'></span>
                  <p className='titulo-list-item'>{item.name}<img src={item.icon}/></p>
                  
                </label>
                <ul className='submenu'>
                  {item.submenu.map((itemSubmenu, indexSubmenu) => (
                    <li key={indexSubmenu} onClick={() =>{ handleSubmenuItemCLick(item.name); if(itemSubmenu.funcion){itemSubmenu.funcion()}}}>
                      <p className='titulo-list-item'>{itemSubmenu.name}<img src={itemSubmenu.icon} style={{filter:'invert(1)'}}/></p>
                    </li>
                  ))}
                </ul>
                <div className='underline'></div>
              </>
            ) : (
              <>
               <p className="titulo-list-item">{item.name} <img src={item.icon}/></p>
               <div className='underline'></div>
              </>
              
            )}
          </li>
         
          
        ))}
        
      </ul>
    </nav>
    </header>
  );
};

export default Navbar1;
