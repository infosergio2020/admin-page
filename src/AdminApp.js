import React from 'react'
//COMPONENTES
import  {PopWindow}  from './components/general/popWindow/PopWindow';
import  {ViewMultimedia}  from './components/multimedia/ViewMultimedia';
// import  {ViewArea}  from './components/areas/ViewArea';
// views de las tablas
import  { ViewEvento } from "./components/vista_tabla/ViewEvento";
import  { ViewEnVivo } from "./components/vista_tabla/ViewEnVivo";
import  { ViewArea } from "./components/vista_tabla/ViewArea";
import  { ViewAtraccion } from "./components/vista_tabla/ViewAtraccion";
// paginas
import  { NewArea } from "./components/crear_area/NewArea";
import  { NewEvento } from "./components/crear_evento/NewEvento";
import { NavBar } from "./components/navBar/NavBar";
//COMPONENTE-GENERAL
import  {VideoApp}  from './components/video/VideoApp';
import  {Boton}  from './components/general/boton/Boton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//ICONOS
import foto from './img/photo.svg';
import video from './img/video.svg';
import  iconos  from "./img/iconos";
//CSS
import './AdminApp.css';
export const AdminApp = () => {
    return (
        <div>
        <Router>
            <NavBar />
            <Switch>
                <Route path='/viewEvento'>
                    <ViewEvento />
                    
                </Route>
                  
                <Route path='/viewMultimedia'>
                    {/* <ViewEnVivo/> */}
                    {/* <ViewMultimedia /> */}
                </Route>
                <Route path='/ViewArea'>
                    <ViewArea />
                    
                </Route>
                <Route path='/NewArea'>
                     {/* <NewArea area={true}/> */}
                </Route> 
                <Route path='/NewEvento'>
                     <ViewAtraccion/>
                    {/* <NewArea area={false} evento={true}/> */}
                </Route>
            </Switch>
        </Router>
{/* 
         <div class="tamaño center flex">
            <div class="tamañoNewArea"> <ViewArea/> </div>
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
                        {/* <div class="tamañoNewArea">
                            <ViewMultimedia />
                        </div> */}
        </div>
    )
}
