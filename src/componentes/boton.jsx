import React from "react";
import "./boton.css";

export function Button({
  src,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) {
  return (
    <button className={"btn"} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
