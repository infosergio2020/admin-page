import React, { useState} from 'react';
import '../styles/VerDetalleEvento.css'
import { VerArea } from "./VerArea";
import { ViewMultimedia } from "../containers/ViewMultimedia";



    



export const VerDetalleEvento = ({areas=["Area-1","Area-2","Area-3","Area-4"]}) => {
    const [mostrar, setmostrarM] = useState(false);
    const [mostrarA, setmostrarA] = useState(false);

    function activarMostrarMultimedia(e){
        setmostrarM(!mostrar);
    } 
    function activarMostrarArea(e){
        setmostrarA(!mostrarA);
    } 
    const ListAreas = ({items}) =>{
        return (
            <ul className="listAreasDetailsEvent-list">
                {items.map(item =>  <li className="listAreasDetailsEvent-item" onClick={activarMostrarArea}>{item}</li>)}
            </ul>
        )
    }
    
    // FUNCION
    function acordion(){
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          });
        }
    }
    
//MAIN


    return (
        <div className="detalle-container">
        {/* botones para pestañas */}
            <section className="detalle-sideA">
                <article>
                  
                    <button className="listAreasDetailsEvent-item" onClick={activarMostrarMultimedia}><h3>Multimedia</h3></button>
                    <button className="accordion listAreasDetailsEvent-item" onClick={acordion()}><h3>Areas</h3></button>
                        <div className="panel">
                           <ListAreas items={areas}/>
                        </div>
                    
                </article>
            </section>

        {/* pestañas */}
            <section className="detalle-sideB">

                {mostrarA && <VerArea />}
                {mostrar && <ViewMultimedia />}
                
            </section>
        </div>
    )
}
