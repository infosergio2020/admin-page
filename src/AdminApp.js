import React from 'react'
import { PopWindow } from './components/general/popWindow/PopWindow';
import video from './icons/photo.svg';

import './main.css'

function AdminApp() {
    return (
        <div>
            <PopWindow icon={video} title="Nueva imagen"/>
            {/* <div className="hola">
                <VideoApp url="https://youtu.be/or8QfmradNM" />
            </div> */}

        </div>
    )
}

export default AdminApp