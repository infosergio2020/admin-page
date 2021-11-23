import React from 'react'
// COMPONENTE
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import { useFetchArchivos } from '../../hooks/useFetchMultimedia';
// CSS
import "./tabla.css";

export const TablaEnvivo = ({item}) => {
    const {data:enVivos,loading} = useFetchArchivos(item);

    return (
        <>
            {loading && <p>Cargando...</p>}
            <div className="table-container">
                {/* <h2>{item}</h2> */}
                <TablaHeader columna={4} titulo={'Titulo'}/>
                {
                    enVivos.map((enVivo,i=0) => ( 
                        <TablaItem key={enVivo.id} columna={4} data={enVivo} acciones={1} index={i} />
                        ))
                }
            </div>
        </>
    )
}