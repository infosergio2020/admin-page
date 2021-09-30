import React from 'react'
import { ViewMultimedia } from './components/multimedia/ViewMultimedia.jsx';

import { Button } from './components/general/boton/boton';
import foto from './icons/photo.svg';
import video from './icons/video.svg';


import './main.css'

function ViewMultimediaApp() {
    return (
        <div class="tamañoNewArea">
            <ViewMultimedia />
            
            {/* <div className="hola">
                <VideoApp url="https://youtu.be/or8QfmradNM" />
            </div> */}
            {/* <Button/> */}
        </div>
    )
}

export default ViewMultimediaApp