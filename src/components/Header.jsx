import { Menu, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { GOOGLE_API_KEY, YT_AUTO_COMPLETE_API } from "../utils/constants";
import { cacheResults, clearCache } from "../redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  console.log("searchCache", searchCache);
  console.log("searchCache Query", searchQuery);

  console.log("searchCache[searchQuery]", searchCache[searchQuery]);

  // useEffect(() => {
  //   //make api call after every key press
  //   //but if the difference between two API calls is less than 200ms
  //   //decline the API call
  //   const timer = setTimeout(() => getSearchSuggestions(), 200);
  //   if (searchCache[searchQuery]) {
  //     setSuggestions(searchCache[searchQuery]);
  //   } else {
  //     getSearchSuggestions();
  //   }
  //   return () => clearTimeout(timer);
  // }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery) return;
  console.log("searchCache", searchCache)
    // If search query is cached, use it and avoid API call
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
      return;
    }
  
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
  
    return () => clearTimeout(timer);
  }, [searchQuery]);

  console.log("searchCache suggestions",suggestions)



  /**
   *
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   * key - ip [if i press p before 200ms]
   * - it will destroy the component(useEffect() return method)
   * - render the component
   * - useEffect()
   *
   * setTimeout(200) - no one pressed any key then api call will happen
   *
   *
   */

  console.log("suggestions", suggestions);

  const getSearchSuggestions = async () => {
    console.log("searchCache API CALL MADE", searchQuery);
    const data = await fetch(YT_AUTO_COMPLETE_API + searchQuery + "&key=" + GOOGLE_API_KEY);
    const json = await data.json();
  
    // Extract only the titles
    const titles = json?.items?.map((item) => item?.snippet?.title) || [];
  
    setSuggestions(titles);
  
    // Update cache with only the titles
    dispatch(
      cacheResults({
        [searchQuery]: titles, // Store only titles in cache
      })
    );
  };


  const clearCache = () => {
    dispatch(clearCache())
  }

  if (!suggestions) return;

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
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className=" border w-3/4 px-10 border-gray-500 p-2 rounded-l-full"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 py-2 px-4 rounded-r-full bg-gray-100">🔍</button>
        {showSuggestions && (
          <div className="absolute max-h-[31vh] overflow-y-auto overflow-x-hidden bg-white py-2 px-5 w-[25rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggestions?.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className="" onClick={clearCache}>Clear Cache</button>
      <div>
        <img className="h-8" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>
    </div>
  );
};

export default Header;
