import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
    <img src={thumbnails.medium.url} className="rounded-lg" />
    <ul>
      <li className="font-bold py-2">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
    </ul>
  </div>;
};

export default VideoCard;
