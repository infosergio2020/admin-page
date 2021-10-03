import React from 'react'
//COMPONENTES
import  {PopWindow}  from './components/general/popWindow/PopWindow';
import  {ViewMultimedia}  from './components/multimedia/ViewMultimedia';
import  {ViewArea}  from './components/areas/ViewArea';
//COMPONENTE-GENERAL
import  {VideoApp}  from './components/video/VideoApp';
import  Button  from './components/general/boton/Boton';
//ICONOS
import foto from './img/photo.svg';
import video from './img/video.svg';
//CSS
import './main.css'
function AdminApp() {
    return (
         <div class="tamaño center flex">
            <div class="tamañoNewArea">
                    <ViewArea  />
            </div>
        </div>
    )
}
export default AdminApp