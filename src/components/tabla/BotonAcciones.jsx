import React from 'react'
import { Boton } from "../Boton";

import iconos from '../../assets/img/iconos';

import "./botonAcciones.css";

export const BotonAcciones = ({acciones,eliminar,id_eliminar=0}) => {
    return (
        <div className="btn-group">
                    {acciones === 1 
                        && <>
                                <Boton buttonStyle={'btn-circle transparent'} icono={iconos.erase} onClick={()=> eliminar(id_eliminar)}/> 
                           </>
                    }
                    {acciones === 2
                        && <>
                                <Boton buttonStyle={'btn-circle'} icono={iconos.edit}/>
                                <Boton buttonStyle={'btn-circle transparent'} icono={iconos.erase}  onClick={()=> eliminar(id_eliminar)}/> 
                           </>
                    }
                    {acciones === 3 
                        && <>
                            <Boton buttonStyle={'btn-circle'} icono={iconos.edit}/> 
                            <Boton buttonStyle={'btn-circle transparent'} icono={iconos.erase}  onClick={()=> eliminar(id_eliminar)}/> 
                            <Boton buttonStyle={'btn-circle transparent'} icono={iconos.show}/> 
                           </>
                    }
        </div>
    )
}
