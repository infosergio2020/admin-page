import React from 'react';
import './TablaItem.css';
import { Button } from "../../boton/Boton";
import edit from "../../../img/edit.svg";
import erase from "../../../img/erase.svg";
import show from "../../../img/show.svg";

export const TablaItem = ({item, espar=true}) => {
    return (
        <div className={"item-container "+(espar && "dark-green")}>
                <div className="item-element">
                    <p>{item.id}</p>
                </div>
                <div className="item-element">
                    <p>{item.titulo}</p>
                </div>
                <div className="item-element">
                    <p>{item.tipo}</p>
                </div>
                <div className="item-element">
                    <div className="group-btn">
                        <Button  type={"button"} icono={edit} buttonStyle="btn-circle" ></Button>
                        <Button  type={"button"} icono={erase} buttonStyle="btn-circle transparent" ></Button>
                        <Button  type={"button"} icono={show} buttonStyle="btn-circle transparent" ></Button>    
                    </div>
                </div>
        </div>
    )
}
