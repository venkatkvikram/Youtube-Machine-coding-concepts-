import { Menu, Search } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger-icon"
          onClick={toggleMenuHandler}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />
        <img
          className="h-12 mx-2"
          alt="Youtube logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLPGrBH4AYPeGltumJHqf74liG1Q2hjxg53lpro4FaBYXbXH-EYERHrHYkeK7KhDqifE&usqp=CAU"
        />
      </div>
      <div className="col-span-10">
        <input type="text" className=" border w-1/4 px-10 border-gray-500 p-2 rounded-l-full" />
        <button className="border border-gray-400 py-2 px-4 rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div>
        <img className="h-8" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>
    </div>
  );
};

export default Header;
