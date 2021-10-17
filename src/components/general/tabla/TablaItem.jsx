import React from 'react'
import PropTypes from 'prop-types';
import "./tablaItem.css"
import { BotonAcciones } from './BotonAcciones';


export const TablaItem = ({columna, data, acciones, index, eliminar}) => {
    //retorna true si es impar 
    function isEven(value) {
        return !(value % 2)
    }

    if(columna === 4){
        return (
            <div className={`table-item ${ isEven(index) ? "verde-oscuro":""}`}>
               <p>{data.id}</p>
               <p>{data.titulo}</p>
               <p>{data.tipo}</p>
               <BotonAcciones acciones={acciones} eliminar={eliminar} id_eliminar={data.id}/>
            </div>
        )    
    } else if(columna === 3) {
        return (
            <div className={`table-item ${ isEven(index) ? "verde-oscuro":""}`}>
               <p>{data.id}</p>
               <p>{data.titulo}</p>
               <BotonAcciones acciones={acciones} eliminar={eliminar}  id_eliminar={data.id}/>
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