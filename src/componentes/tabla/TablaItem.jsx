import React from 'react'
import PropTypes from 'prop-types';
import "./tablaItem.css"
import { BotonAcciones } from './BotonAcciones';


export const TablaItem = ({columna, data, acciones, espar=false}) => {
    if(columna === 4){
        return (
            <div className={`table-item ${espar ? "verde-oscuro":""}`}>
               <p>{data.id}</p>
               <p>{data.titulo}</p>
               <p>{data.tipo}</p>
               <BotonAcciones acciones={acciones}/>
            </div>
        )    
    } else if(columna === 3) {
        return (
            <div className={`table-item ${espar ? "verde-oscuro":""}`}>
               <p>{data.id}</p>
               <p>{data.titulo}</p>
               <BotonAcciones acciones={acciones}/>
            </div>
        )
    } else {
        return (
            <>
                No hay cantidad de columnas especificada en el itemTable
            </>
        )
    }
}

TablaItem.propTypes = { 
    columna: PropTypes.number.isRequired
}