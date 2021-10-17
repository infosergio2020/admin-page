import React from 'react'
import { Boton } from "../boton/Boton";
import erase from "../../../img/erase.svg";
import edit from "../../../img/edit.svg";
import show from "../../../img/show.svg";
import "./botonAcciones.css";

export const BotonAcciones = ({acciones,eliminar,id_eliminar=0}) => {
    return (
        <div className="btn-group">
                    {acciones === 1 
                        && <>
                                <Boton buttonStyle={'btn-circle transparent'} icono={erase} onClick={()=> eliminar(id_eliminar)}/> 
                           </>
                    }
                    {acciones === 2
                        && <>
                                <Boton buttonStyle={'btn-circle'} icono={edit}/>
                                <Boton buttonStyle={'btn-circle transparent'} icono={erase}  onClick={()=> eliminar(id_eliminar)}/> 
                           </>
                    }
                    {acciones === 3 
                        && <>
                            <Boton buttonStyle={'btn-circle'} icono={edit}/> 
                            <Boton buttonStyle={'btn-circle transparent'} icono={erase}  onClick={()=> eliminar(id_eliminar)}/> 
                            <Boton buttonStyle={'btn-circle transparent'} icono={show}/> 
                           </>
                    }
        </div>
    )
}
