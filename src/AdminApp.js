import React from 'react'
//COMPONENTES
import  {PopWindow}  from './components/general/popWindow/PopWindow';
import  {ViewMultimedia}  from './components/multimedia/ViewMultimedia';
import  {ViewArea}  from './components/areas/ViewArea';
import  { ViewEvento } from "./components/eventos/ViewEvento";
import  { NewArea } from "./components/crear_area/NewArea";
import  { NewEvento } from "./components/crear_evento/NewEvento";
//COMPONENTE-GENERAL
import  {VideoApp}  from './components/video/VideoApp';
import  {Boton}  from './components/general/boton/Boton';
//ICONOS
import foto from './img/photo.svg';
import video from './img/video.svg';
import  iconos  from "./img/iconos";
//CSS
import './AdminApp.css';
export const AdminApp = () => {
    return (
        <div>

        {/* <div class="tamaño center flex">
            <div class="tamañoNewArea"> <ViewArea  /> </div>
        </div> */}
        {/* <div> <ViewEvento /> </div> */}
        {/* <div> <NewArea area={true} /> </div> */}
        {/* <div> <NewEvento /> </div> */}
            {/* probar popWindow */}
                {/* <PopWindow icon={iconos.photo} title="Nueva imagen" video={false} />
                <PopWindow icon={iconos.video} title="Nuevo video" video={true} /> */}
            
            {/* probar VideoApp */}
            {/* <div className="apariencia-container">
                <div className="apariencia">
                    <VideoApp url="https://youtu.be/or8QfmradNM" video={true} title="lo que sea" />
                </div> 
                <div className="apariencia">
                    <textarea className="input-textArea" type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>
                </div>
            </div> */}

            {/* probar boton */}
                        {/* <Boton icono={iconos.video}/> */}

            {/* probar vista del multimedia */}
                        <div class="tamañoNewArea">
                            <ViewMultimedia />
                        </div>
        </div>
    )
}
