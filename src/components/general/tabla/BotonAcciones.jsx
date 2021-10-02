import React from 'react'
import { Button } from "../boton/Boton";
import erase from "../../img/erase.svg";
import edit from "../../img/edit.svg";
import show from "../../img/show.svg";
import "./botonAcciones.css";

export const BotonAcciones = ({acciones}) => {
    return (
        <div className="btn-group">
                    {acciones === 1 
                        && <>
                                <Button buttonStyle={'btn-circle transparent'} icono={erase}/> 
                           </>
                    }
                    {acciones === 2
                        && <>
                                <Button buttonStyle={'btn-circle'} icono={edit}/>
                                <Button buttonStyle={'btn-circle transparent'} icono={erase}/> 
                           </>
                    }
                    {acciones === 3 
                        && <>
                            <Button buttonStyle={'btn-circle'} icono={edit}/> 
                            <Button buttonStyle={'btn-circle transparent'} icono={erase}/> 
                            <Button buttonStyle={'btn-circle transparent'} icono={show}/> 
                           </>
                    }
        </div>
    )
}
