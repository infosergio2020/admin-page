import React from "react";
import "./buscador.css";

export const Buscador = ({ type, placeholder, name }) => {
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
