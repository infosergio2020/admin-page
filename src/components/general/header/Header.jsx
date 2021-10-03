import React from "react";
import { Button } from "../boton/Boton.jsx";
import "./header.css";
//ICONOS
import salir from '../../img/logout.svg';
import mano from '../../img/hand.svg';

export const Header = ({ src }) => {
  return (
    <header>
        <div className={"nav-background"}>
          <nav className={"navegacion-principal"}>
              <a href={"#"}>Inicio</a>
              <div className={"alinear"}>
                <h2 href={"#"}>Hola!  </h2>
                <img src={mano} />
              </div>
              <h2 href={"#"}>Eventos</h2>
              <Button icono={salir}> cerrar sesion </Button>
          </nav>
        </div>
    </header>
  );
}
