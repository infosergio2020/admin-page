import React from "react";
import { Button } from "./boton";
import "./header.css";

export function Header({ href }) {
  return (
    <header>
      <div className={"nav-background"}>
        <nav className={"navegacion-principal"}>
          <a href={"#"}>Inicio</a>
          <h2 href={"#"}>Hola!</h2>
          <h2 href={"#"}>Eventos</h2>
          <Button> cerrar sesión</Button>
        </nav>
      </div>
    </header>
  );
}
