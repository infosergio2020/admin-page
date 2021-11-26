import React from 'react'
// CONTEXT
import { EventoProvider } from "../context/globalContext";
// COMPONENTES
import { NavBar } from "../components/NavBar";
import { NotFound404 } from '../pages/NotFound404';
import { CrearEnvivo } from '../pages/CrearEnvivo';
import { CrearArea } from '../pages/CrearArea';
import { CrearEvento } from '../pages/CrearEvento';

import { VerArea } from '../pages/VerArea';
import { VerMultimedia } from '../pages/VerMultimedia';
import { VerEnvivo } from '../pages/VerEnvivo';

// REACT-ROUTER
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
//CSS
import '../styles/AdminApp.css';
import { VerDetalleEvento } from '../pages/VerDetalleEvento';

export const AdminApp = () => {
    return (
        <EventoProvider>
            <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <VerDetalleEvento/>
                    </Route>
                    <Route exact path='/Eventos'>
                        
                    </Route>
                    <Route exact path='/CrearEvento'>
                        <CrearEvento/>
                    </Route> 
                    <Route exact path='/Areas'>
                        <VerArea/>
                    </Route>
                    <Route exact path='/CrearArea'>
                        <CrearArea/>
                    </Route> 
                    <Route exact path='/Multimedia'>
                        <VerMultimedia/>
                    </Route>
                    <Route exact path='/Multimedia'>
                        {/* <CrearAtraccion /> */}
                        
                    </Route>

                    <Route exact path='/Envivos'>
                        <VerEnvivo/>
                    </Route>
                    <Route exact path='/CrearEnvivo'>
                        <CrearEnvivo />
                    </Route>
                    <Route path='*'>
                        <NotFound404 />
                    </Route>
                </Switch>
            </Router>
            </div>
        </EventoProvider>
    )
}
