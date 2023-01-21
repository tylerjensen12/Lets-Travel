import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

const VideoScreen = () => {
  const [allVids, setAllVids] = useState([]);
  const [adv, setAdv] = useState([]);
  const [port, setPort] = useState([]);

  const getAllVideos = () => {
    axios
      .get("/api/allvideos")
      .then(res => setAllVids(res.data))
      .catch(err => console.error(err));
  };

  const getAdvVideos = () => {
    axios
      .get("/api/advvideos")
      .then(res => setAdv(res.data))
      .catch(err => console.error(err));
  };

  const getPortVideos = () => {
    axios
      .get("/api/portvideos")
      .then(res => setPort(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getAllVideos();
    getAdvVideos();
    getPortVideos();
  }, []);

  const latest = allVids.slice(0, 10);
  const adventure = adv.slice(0, 5);
  const ports = port.slice(0, 5);

  const latDisplay = latest.map((video, index) => {
    let id = video.id;
    return <VideoCard key={id} video={video} />;
  });
  const advDisplay = adventure.map((video, index) => {
    let id = video.id;
    return <VideoCard key={id} video={video} />;
  });
  const portDisplay = ports.map((video, index) => {
    let id = video.id;
    return <VideoCard key={id} video={video} />;
  });

  return (
    <div>
      <h1>Latest Videos</h1>
      <div className="videos">{latDisplay}</div>
      <h1>Adventures</h1>
      <div className="videos">{advDisplay}</div>
      <h1>Port Guides</h1>
      <div className="videos">{portDisplay}</div>
    </div>
  );
};

export default VideoScreen;
