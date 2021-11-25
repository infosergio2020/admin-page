// Mis imports
import React, { useState} from 'react';
import '../styles/VerDetalleEvento.css'
import { ViewMultimedia } from "../containers/ViewMultimedia";
import { ViewArea } from '../containers/ViewArea';

//Comienzo de la clase
export const VerDetalleEvento = ({areas=['area-1','area-2','area-3']}) => {
        //Funcion de las listas de area
    const ListAreas = ({items}) =>{
        return (
            <ul className="listAreasDetailsEvent-list">
                {items.map(item =>  <li className="listAreasDetailsEvent-item" onClick={() => toggleTab(2)}>{item}</li>)}
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
    const [toggleState, setToggleState] = useState(1);
    //funcion para cambiar las vistas
    const toggleTab = (index) => {
      setToggleState(index);
    };

//MAIN
    return (
        <div className="detalle-container">
        {/* botones para pestañas */}
            <section className="detalle-sideA">
                <article>
                    <button className="listAreasDetailsEvent-item" onClick={() => toggleTab(1)}><h3>Multimedia</h3></button>
                    <button className="accordion listAreasDetailsEvent-item" onClick={acordion()}><h3>Areas</h3></button>
                        <div className="panel">
                           <ListAreas items={areas}/>
                        </div>
                </article>
            </section>
        {/* pestañas */}
            <section className="detalle-sideB">
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    <ViewMultimedia />
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <ViewArea/>                    
                </div>
            </section>
        </div>
    )
}
