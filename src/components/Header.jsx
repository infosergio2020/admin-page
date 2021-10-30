import React from "react";
import { Boton } from "./Boton.jsx";
import { Link } from "react-router-dom";
import "../styles/header.css";

//ICONOS
import iconos from "../assets/img/iconos";

export const Header = ({ src="#",titulo,saludo=true }) => {
  return (
    <>
        <div className={"header-background header-container"}>          
          <Link to="/">Inicio</Link>
          { saludo && ( <div className={"saludo"}>
                          <h2>Hola!</h2> 
                          <img src={iconos.hand}/> 
                        </div>)
          }
          <h2 className="header-titulo" >{titulo}</h2>
          <Boton icono={iconos.logout}> cerrar sesion </Boton>
        </div>
    </>
  );
}
