import React from "react";
import "./boton.css";
import salir from './img/logout.svg';

export function Button({
  src,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) {
  return (
    <button className={"btn"} onClick={onClick} type={type}>
      {children}

      <div className={"sesion"}> 
      <div> cerrar sesión</div>
      
      
      <img src={salir} alt="React Logo" />
      </div>
      
    </button>
    
  );
}
