import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Shares from "./Pages/Shares";
import Purposes from "./Pages/Purposes";
import Communityy from "./Pages/Communityy";
import Careers from "./Pages/Careers";
import Learnn from "./Pages/Learnn";
import United from "./Pages/United";
import NotFound from "./Pages/Notfound";

function App() {
  const [count, setCount] = useState(0);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Shares />,
    },
    {
      path: "/purpose",
      element: <Purposes />,
    },
    {
      path: "/community",
      element: <Communityy />,
    },
    {
      path: "/career",
      element: <Careers />,
    },
    {
      path: "/learn",
      element: <Learnn />,
    },
    {
      path: "/united",
      element: <United />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
