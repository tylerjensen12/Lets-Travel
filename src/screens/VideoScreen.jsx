import React, {useState, useEffect} from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

const VideoScreen = () => {
  const [vids, setVids] = useState([])

  const getData = () => {
    axios
      .get('/allVideos')
      .then((res) => {
        console.log(res.data)
        setVids(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const vidDisplay = vids.map((video, index) => {
    return <VideoCard video={video} />
  })

  return (
    <div>
      <h1>Latest Videos</h1>
      {vidDisplay}
      <h1>Adventures</h1>
      <h1>Port Guides</h1>
    </div>
  );
};

export default VideoScreen