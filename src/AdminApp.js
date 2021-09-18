import React from 'react'
import { PopWindow } from './components/general/popWindow/PopWindow';
// import VideoApp from "./components/video/VideoApp";

import './main.css'

function AdminApp() {
    return (
        <div>
            <PopWindow title="Nuevo video"/>
            {/* <div className="hola">
                <VideoApp url="https://youtu.be/or8QfmradNM" />
            </div> */}

        </div>
    )
}

export default AdminApp