import React from "react";
import "./boton.css";

export const Button = ({ src, children, type, onClick, buttonStyle="", icono="" }) => {
  return (
    <button className={`btn ${buttonStyle}`} onClick={onClick} type={type}>
      <div className={"sesion"}> 
        {children}
        <img src={icono} alt="Logo" />
      </div>
    </button>
  );
}