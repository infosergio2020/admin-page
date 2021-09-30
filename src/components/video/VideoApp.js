import React from 'react';
import ReactPlayer from 'react-player'
import './VideoApp.css';


const VideoApp = ({ url,video, title="insertar-titulo" }) => {
   
   
   
    
        if(!url){
            return (
                <>
                {/* te muestra imagen de no hay video */}
                {video &&
                <div>  
                    <h2 className="video-title">{title}</h2>
                    <div className="player-wrapper">
                        <img  
                            className="react-player img-w100"
                            src="https://i.redd.it/ftfjtwljjw931.png"></img>
                    </div>
                </div>
                }
                {/* te muestra imagen de no hay imagen */}
                {!video &&
                <div>  
                    <h2 className="video-title">{title}</h2>
                    <div className="player-wrapper">
                        <img  
                            className="react-player img-w100"
                            src="https://lh3.googleusercontent.com/proxy/kuaT7Mp9USogUB5buwnqeQVEBmJuRdzo_aFifYW_xwbhnCeW3lZx-D5kIgDmX2A93thKOIKsfoFt3kzQm4PckvuVHjzQpHGfu7IgbwB-JSZDdU6PNSVZ4Jtg1-NsVsBjz-yXLwpmk-cbiYMkjCU-x9q0o-zLuR-4olFMWHVrmc91KV_0j2D5zOSCMDzZI7SkQHCvDZ1wN-Y7"></img>
                    </div>
                </div>
                
                }
                </>
            )
        }else{
            return (
                <>
                {/* te muestra el url del video */}
                {video&&
                <div>
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
                </div>
                }
                {/* te muestra la url de la imagen */}
                {!video&&
                <div>
                    <h2 className="video-title">{title}</h2>
                    <div className="">
                        <img src={url} alt="imagen"/>
                        {/* <ReactPlayer 
                            className="react-player"
                            url={ url }
                            width='100%'
                            height='100%'
                            controls={true}
                        /> */}
                    </div>             
                </div>
                }
                </>
            )
        }
    
    
}

export default VideoApp