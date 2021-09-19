import React from "react";
import "./boton.css";

export function Button({
  src,
  children,
  type,
  onClick,
  buttonStyle="",
  buttonSize,
  icono=""
}) {
  return (
    <button className={`btn ${buttonStyle}`} onClick={onClick} type={type}>
      

      <div className={"sesion"}> 
      {children}
      
      <img src={icono} alt="React Logo" />
      </div>
      
    </button>
    
  );
}
