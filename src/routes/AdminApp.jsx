import React from 'react'
// COMPONENTES
import { NavBar } from "../components/NavBar";
import { NotFound404 } from '../pages/NotFound404';
// REACT-ROUTER
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
//CSS
import '../styles/AdminApp.css';
export const AdminApp = () => {
    return (
        <div>
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <h1>Welcome!</h1>
                </Route>
                <Route exact path='/Eventos'>
                    <h1>Eventos</h1>
                </Route>
                <Route exact path='/CrearEvento'>
                    <h1>CrearEvento</h1>
                </Route> 
                <Route exact path='/Areas'>
                    <h1>Areas</h1>
                </Route>
                <Route exact path='/CrearArea'>
                    <h1>CrearArea</h1>
                </Route> 
                <Route exact path='/Atracciones'>
                    <h1>Atracciones</h1>
                </Route>
                <Route exact path='/CrearAtraccion'>
                    <h1>CrearAtraccion</h1>
                </Route>
                <Route exact path='/Envivos'>
                    <h1>Envivo</h1>
                </Route>
                <Route exact path='/CrearEnvivo'>
                    <h1>CrearEnvivo</h1>
                </Route>
                <Route path='*'>
                    <NotFound404 />
                </Route>
            </Switch>
        </Router>

        </div>
    )
}
