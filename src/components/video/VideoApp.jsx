import React from 'react';
//COMPONENTES
import ReactPlayer from 'react-player'
//CSS
import './VideoApp.css';
export const VideoApp = ({ video=false ,url, title="insertar-titulo" }) => {
    return (
    <>
        {video &&
        <div>  
            <h2 className="video-title">{title}</h2>
            <div className="player-wrapper">
            {
                url? 
                (<ReactPlayer className="react-player" url={url} width='100%' height='100%' controls={true}/>) 
                :(<img className="react-player img-w100" src="https://i.ytimg.com/vi/NV5bmaHWQr0/maxresdefault.jpg"></img>)
            }
            </div>
        </div>
        }
        
        {!video &&
        <div>  
            <h2 className="video-title">{title}</h2>
            <div className="player-wrapper">
                <img className="react-player img-w100"
                     src={url? url:"https://img.icons8.com/plasticine/2x/fa314a/no-image.png"}>
                </img>
            </div>
        </div>
        }
    </>
    )
}