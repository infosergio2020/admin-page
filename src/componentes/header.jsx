import React from "react";
import { Button } from "./boton";
import "./header.css";
import salir from './img/logout.svg';

export function Header({ href }) {
  return (
    <header>
      <div className={"nav-background"}>
        <nav className={"navegacion-principal"}>
          <a href={"#"}>Inicio</a>
          <div className={"alinear"}>

          <h2 href={"#"}>Hola!  </h2>
          <img src="https://img.icons8.com/pastel-glyph/50/000000/hand--v2.png"/>
          
          </div>
          
            
          <h2 href={"#"}>Eventos</h2>
          <Button> </Button>
          
        </nav>
      </div>
    </header>
  );
}
