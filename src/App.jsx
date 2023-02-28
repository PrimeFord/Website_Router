import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
