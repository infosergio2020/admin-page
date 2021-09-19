import React from "react";
import { Button } from "./boton";
import "./header.css";
//ICONOS
import salir from './img/logout.svg';
import mano from './img/hand.svg';
import cancelar from './img/cancelar.svg';
import agregar from './img/add.svg';


export function Header({ href }) {
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
          <Button buttonStyle="azul" icono={agregar}> video </Button>
          <Button buttonStyle="verde" icono={mano}> aceptar </Button>
          <Button buttonStyle="rojo" icono={cancelar}> cancelar </Button>
          <Button icono={salir}> cerrar sesion </Button>
          
        </nav>
      </div>
    </header>
  );
}
