import React from 'react'
import { Boton } from "../boton/Boton";
import erase from "../../../img/erase.svg";
import edit from "../../../img/edit.svg";
import show from "../../../img/show.svg";
import "./botonAcciones.css";

export const BotonAcciones = ({acciones}) => {
    return (
        <div className="btn-group">
                    {acciones === 1 
                        && <>
                                <Boton buttonStyle={'btn-circle transparent'} icono={erase}/> 
                           </>
                    }
                    {acciones === 2
                        && <>
                                <Boton buttonStyle={'btn-circle'} icono={edit}/>
                                <Boton buttonStyle={'btn-circle transparent'} icono={erase}/> 
                           </>
                    }
                    {acciones === 3 
                        && <>
                            <Boton buttonStyle={'btn-circle'} icono={edit}/> 
                            <Boton buttonStyle={'btn-circle transparent'} icono={erase}/> 
                            <Boton buttonStyle={'btn-circle transparent'} icono={show}/> 
                           </>
                    }
        </div>
    )
}
