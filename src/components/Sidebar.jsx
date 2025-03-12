import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isSideMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 h-screen shadow-lg col-span-1">
      <ul>
        <li className="cursor-pointer"><Link to="/">Home</Link></li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Music</li>
        <li> Music</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Music</li>
        <li> Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
