import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Share from "./Pages/Share";
import Purpose from "./Pages/Purpose";
import Community from "./Pages/Community";
import Career from "./Pages/Career";
import Learn from "./Pages/Learn";
import United from "./Pages/United";
import NotFound from "./Pages/Notfound";

function App() {
  const [count, setCount] = useState(0);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Share />,
    },
    {
      path: "/purpose",
      element: <Purpose />,
    },
    {
      path: "/community",
      element: <Community />,
    },
    {
      path: "/career",
      element: <Career />,
    },
    {
      path: "/learn",
      element: <Learn />,
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
