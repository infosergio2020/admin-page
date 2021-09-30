import React from 'react'
import { PopWindow } from './components/general/popWindow/PopWindow';

import  VideoApp  from './components/video/VideoApp';

import { Button } from './components/general/boton/boton';
import foto from './icons/photo.svg';
import video from './icons/video.svg';


import './main.css'

function AdminApp() {
    return (
         <div class="tamaño center flex">
        {/* <PopWindow icon={foto} title="Nueva imagen" video={false} />
        <PopWindow icon={video} title="Nuevo video" video={true} /> */}
            <div className="apariencia">
                <VideoApp url="https://youtu.be/or8QfmradNM"/>
            </div> 
            <div className="apariencia">
            <textarea className="input-textAreaV input-backgroundV" type="text" name="descripcion"  placeholder="Descripción" aria-multiline="true"></textarea>

            </div>
            {/* <Button/> */}
        </div>
    )
}

export default AdminApp