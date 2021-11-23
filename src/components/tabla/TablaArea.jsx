import React from 'react'
// COMPONENTE
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import { useFetchAreas } from '../../../hooks/useFetchAreas';
// CSS
import "./tabla.css";

export const TablaArea = ({item}) => {
    const {data:areas,loading} = useFetchAreas(item);
    return (
        <>
            {loading && <p>Cargando...</p>}
            <div className="table-container">
                {/* <h2>{item}</h2> */}
                <TablaHeader columna={4} titulo={'Titulo'}/>
                {
                areas.map((area,i=0) => ( 
                        <TablaItem key={area.id} columna={4} data={area} acciones={1} index={i} />
                        ))
                }
            </div>
        </>
    )
}