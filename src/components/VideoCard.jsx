import React from "react";
import style from './VideoCard.module.css'

const VideoCard = ({video}) => {
    return <div className={style.video_card}>
        <video src={video.url} />
        <h3>{video.title}</h3>
        <h5>{video.description}</h5>
    </div>
}

export default VideoCard