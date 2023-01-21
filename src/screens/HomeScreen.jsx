import React, { useState, useEffect } from "react";
// import VideoCard from "../components/VideoCard";
import axios from "axios";
import style from "../components/VideoCard.module.css";
import ncl from "../pictures/ncl-breakaway.jpg";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [allVids, setAllVids] = useState([]);

  const getAllVideos = () => {
    axios
      .get("/api/allvideos")
      .then((res) => {
        setAllVids(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  // const latest = allVids.slice(0, 1);

  // const latDisplay = latest.map((video, index) => {
  //   let id = video.id;
  //   return <VideoCard key={id} video={video} />;
  // });

  return (
    <div className="home">
      <h1>Salutations</h1>
      <p className="paragraph">
        We are Dee & Jay of the House ParoDeeJay, first of our names, makers of
        songs, cruisers of ships, the sometimes-sunburnt, creators of nonsense,
        vloggers of randomness, and parents of kitties. We started our YouTube
        journey in 2013 as a way to release homemade, no-budget parody and cover
        songs, and eventually added videos on cooking, challenges, gaming,
        travel & more. Basically, our channel is a big ol' mixed bag of things
        that we enjoy, and we hope you'll join us for some crazy adventures!
      </p>
      <div className="boxes">
        <div className="box">
          <div className={style.video_card_main}>
            <iframe className={style.video_main} src={allVids.url} />
            <h2 className={style.title}>{allVids.title}</h2>
            <h3 className={style.des}>{allVids.description}</h3>
          </div>
        </div>
        <div className="box">
          <Link to="/travel-plans">
            <span>Come sail away with us!</span>
          </Link>
        </div>
        <div className="box">
          <Link to="/dee-lightful-destinations">
            <span>Where is your next adventure?</span>
          </Link>
        </div>
        {/* <div className="box">Merch</div> */}
      </div>
    </div>
  );
};

export default HomeScreen;
