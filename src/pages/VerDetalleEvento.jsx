import React from 'react'
import '../styles/VerDetalleEvento.css'
import { VerArea } from "./VerArea";

const ListAreas = ({items}) =>{
    return (
        <ul className="listAreasDetailsEvent-list">
            {items.map(item =>  <li className="listAreasDetailsEvent-item">{item}</li>)}
        </ul>
    )
}



export const VerDetalleEvento = ({areas=["Area-1","Area-2","Area-3","Area-4"]}) => {
    const flagArea = false;
    return (
        <div className="detalle-container">
        {/* botones para pestañas */}
            <section className="detalle-sideA">
                <article>
                    <h3>Multimedia</h3>
                    <h3>Areas</h3>
                    <ListAreas items={areas}/>
                </article>
            </section>

        {/* pestañas */}
            <section className="detalle-sideB">

                {flagArea && <VerArea />}
            </section>
        </div>
    )
}
