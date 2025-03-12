import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [   //children goes to outlet based on active path
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
        {/* {
      Head
      Body
        Sidebar
          MenuItems
        Main Container
          Category button List
          Video Container
          Video Card -> onClick -> video player with comments and likes
     } */}
      </div>
    </Provider>
  );
}

export default App;
