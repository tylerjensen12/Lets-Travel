import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

const VideoScreen = () => {
  const [vids, setVids] = useState([]);

  const getData = () => {
    axios
      .get("/api/allvideos")
      .then((res) => {
        console.log(res.data);
        setVids(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const latest = vids.slice(0, 4);
  const adventure = vids.filter(videos => videos.adventure = true).slice(0,4)

  const latDisplay = latest.map((video, index) => {
    return <VideoCard video={video} />;
  });
  const advDisplay = adventure.map((video, index) => {
    return <VideoCard video={video} />;
  });

  return (
    <div>
      <h1>Latest Videos</h1>
      <div className="videos">{latDisplay}</div>
      <h1>Adventures</h1>
      <div className="videos">{advDisplay}</div>
      <h1>Port Guides</h1>
    </div>
  );
};

export default VideoScreen;
