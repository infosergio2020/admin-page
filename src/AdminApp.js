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
                <Route exact path='/'>
                    <h1>Welcome!</h1>
                </Route>

                <Route path='/viewEvento'>
                    <ViewEvento />
                </Route>
                  
                <Route path='/viewMultimedia'>
                    <ViewEnVivo/>
                    {/* <ViewMultimedia /> */}
                </Route>
                <Route path='/ViewArea'>
                    <ViewArea />
                </Route>
                <Route path='/NewArea'>
                     <NewArea area={true}/>
                </Route> 
                <Route path='/NewEvento'>
                    <h1>HHHHHHHHHAAAAAAAAAAAAAAAAAAA</h1>
                     {/* <ViewAtraccion/> */}
                    {/* <NewArea area={false} evento={true}/> */}
                </Route>
            </Switch>
        </Router>

        </div>
    )
}
