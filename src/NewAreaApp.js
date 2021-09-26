import React from 'react'
import { NewArea } from './components/crear_area/NewArea';

import { Button } from './components/general/boton/boton';
import foto from './icons/photo.svg';
import video from './icons/video.svg';


import './main.css'

function NewAreaApp() {
    return (
        <div class="tamañoNewArea">
            <NewArea area={true} />
            
            {/* <div className="hola">
                <VideoApp url="https://youtu.be/or8QfmradNM" />
            </div> */}
            {/* <Button/> */}
        </div>
    )
}

export default NewAreaApp