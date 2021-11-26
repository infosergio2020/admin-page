import React from 'react'
// COMPONENTE
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from './TablaItem';
import { useFetchAtracciones } from '../../../hooks/useFetchAtracciones';
import { eliminarAtraccion } from "../../../helpers/getAtracciones";
// CSS
import "./tabla.css";

export const TablaAtraccion = ({item}) => {
    // const {data:atracciones,loading} = useFetchAtracciones(item);
    const {state,setState} = useFetchAtracciones(item);
    const { data:atracciones, loading } = state;
    const eliminar = (item)=>{
        let contador=0
        let lista = atracciones
        lista.map((atraccion) => {
            if (atraccion.id == item){
                lista.splice(contador,1);
            }
            ++contador;
        });

        setState({
                data:lista,
                loading:false
            })
        //llamar al servicio para eliminarlo de la BD
        eliminarAtraccion(item);
    }

    return (
        <>
            {loading && <p>Cargando...</p>}
            <div className="table-container">
                {/* <h2>{item}</h2> */}
                <TablaHeader columna={3} titulo={'Titulo'}/>
                {
                atracciones.map((atraccion,i=0) => ( 
                        <TablaItem key={atraccion.id} columna={3} data={atraccion} acciones={2} index={i} eliminar={eliminar}/>
                        ))
                }
            </div>
        </>
    )
}