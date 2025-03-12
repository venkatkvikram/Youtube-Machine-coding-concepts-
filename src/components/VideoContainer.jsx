import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YT_POPULAR_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YT_POPULAR_VIDEOS_API);
    const data = await response.json();
    console.log("data", data);
    setVideos(data.items);
  };

  console.log("videos", videos);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
