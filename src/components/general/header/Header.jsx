import React from "react";
import { Boton } from "../boton/Boton.jsx";
import "./header.css";
//ICONOS
import salir from '../../../img/logout.svg';
import mano from '../../../img/hand.svg';

export const Header = ({ src,titulo,saludo=true }) => {
  return (
    <header>
        <div className={"nav-background"}>
          <nav className={"navegacion-principal"}>
              <a href={"#"}>Inicio</a>
              
                { saludo && (
                              <div className={"alinear"}>
                                <h2 href={"#"}>Hola!  </h2> 
                                <img src={mano} /> 
                              </div>
                )}
              
              <h2 href={"#"}>{titulo}</h2>
              <Boton icono={salir}> cerrar sesion </Boton>
          </nav>
        </div>
    </header>
  );
}
