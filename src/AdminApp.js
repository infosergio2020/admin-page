import React from 'react'
import { PopWindow } from './components/general/popWindow/PopWindow';
import foto from './icons/photo.svg';
import video from './icons/video.svg';


import './main.css'

function AdminApp() {
    return (
        <div class="tamaño">
            <PopWindow icon={foto} title="Nueva imagen" video={false} />
            <PopWindow icon={video} title="Nuevo video" video={true} />
            {/* <div className="hola">
                <VideoApp url="https://youtu.be/or8QfmradNM" />
            </div> */}

        </div>
    )
}

export default AdminApp