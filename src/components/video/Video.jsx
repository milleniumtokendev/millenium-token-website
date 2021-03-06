import React from 'react';
import './Video.css';



const Video = ({video}) => {
    return(
        <div className='Video'>
            <div className='video-wrapper'>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
export default Video;