import React from 'react'
// COMPONENTE
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import { useFetchEventos } from '../../hooks/useFetchEventos';
// CSS
import "./tabla.css";

export const TablaEventos = ({item}) => {
    const {data:eventos,loading} = useFetchEventos(item);
    // ori: posiblemente para todos los otros componentes no recibirian item
    // ori: Si quiero agrego el buscador en los otros componentes (pero en el prototipo no esta reflejado esto, asique lo pienso)
    //ori: cambiar data:eventos   por data:areas
    return (
        <>
            {loading && <p>Cargando...</p>}
            <div className="table-container">
                {/* <h2>{item}</h2> */}
                <TablaHeader columna={3} titulo={'Titulo'}/>
                {//ori: cambiar eventos.map por areas.map
                //ori: cambiar eventos,i=0 por areas,i=0
                // ori: por lo tanto, en TablaItem cambio evento por area obviamente
                // ori: en acciones me fijo cuantos botones usa cada tabla.
                // ori: me fijo por otro lado, cuantas columnas tiene si son 3 o 4
                    eventos.map((evento,i=0) => ( 
                        <TablaItem key={evento.id} columna={3} data={evento} acciones={3} index={i} />
                        ))
                }
            </div>
        </>
    )
}