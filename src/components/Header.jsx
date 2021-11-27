import React from "react";
import { Boton } from "./Boton.jsx";
import { Link } from "react-router-dom";
import "../styles/header.css";

//ICONOS
import iconos from "../assets/img/iconos";

const Saludo = ({flag})=>{
  return (<>
          { flag && ( <div className={"saludo"}>
                          <h2>Hola!</h2> 
                          <img src={iconos.hand}/> 
                        </div>)
          }
  </>)
}


export const Header = ({ src="#",titulo,saludo=true }) => {
  return (
    <>
        <div className={"header-ct header-bg"}>          
          <Link className="btn-inicio" to="/">Inicio</Link>
          <Saludo flag={saludo}/>
          <h2 className="header-h2" >{titulo}</h2>
          <Boton icono={iconos.logout}> cerrar sesion </Boton>
        </div>
    </>
  );
}
