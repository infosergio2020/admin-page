import React from 'react'
import { TablaHeader } from "./TablaHeader";
import { TablaItem } from "./TablaItem";

export const TablaFotosVideos = ({ arrayFoto, arrayVideo, eliminarFoto, eliminarVideo }) => {
    return (
        <>
            <div className="table-container">
                <TablaHeader columna={3} titulo={'Foto/Video'}/>
                { arrayFoto.map((item,i=0) => ( <TablaItem key={i} columna={3} data={{id:i,...item}} acciones={1} index={i} eliminar={(e)=>{ eliminarFoto(e,item)}} /> )) }
                { arrayVideo.map((item,i=0) => ( <TablaItem key={i} columna={3} data={{id:i,...item}} acciones={1} index={i} eliminar={(e)=>{eliminarVideo(e,item)}} /> )) }
            </div>
        </>
    )
}
