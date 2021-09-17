import React from 'react';
import ReactPlayer from 'react-player'
import './VideoApp.css';


const VideoApp = ({ url, title="insertar-titulo" }) => {
    if(!url){
        return (
            <>
                <h2 className="video-title">{title}</h2>
                <div className="player-wrapper">
                    <img  
                        className="react-player img-w100"
                        src="https://i.redd.it/ftfjtwljjw931.png"></img>
                </div>
            </>
        )
    }else{
        return (
            <>
                <h2 className="video-title">{title}</h2>
                <div className="player-wrapper">
                    <ReactPlayer 
                        className="react-player"
                        url={ url }
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
            </>
        )
    }
}

export default VideoApp