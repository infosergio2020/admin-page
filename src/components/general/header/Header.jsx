import React from "react";
import { Boton } from "../boton/Boton.jsx";
import "./header.css";
//ICONOS
import salir from '../../../img/logout.svg';
import mano from '../../../img/hand.svg';

export const Header = ({ src="#",titulo,saludo=true }) => {
  return (
    <>
        <div className={"header-background header-container"}>          
          <a href={src}>Inicio</a>
          { saludo && ( <div className={"saludo"}>
                          <h2>Hola!</h2> 
                          <img src={mano}/> 
                        </div>)}

          <h2 href={"#"}>{titulo}</h2>
          <Boton icono={salir}> cerrar sesion </Boton>
        </div>
    </>
  );
}
