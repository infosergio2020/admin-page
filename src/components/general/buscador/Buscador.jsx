import React from "react";
import "./buscador.css";

export function Buscador({ type, placeholder, name }) {
  return (
    <div className={"divboton"}>
      <form className={"buscador"}>
        <input
          className={"input"}
          type={"text"}
          placeholder={"Ingrese el nombre del evento"}
          name={"evento"}
        />
      </form>
      <input className={"btn label"} type={"submit"} value={"buscar"} />
    </div>
  );
}
