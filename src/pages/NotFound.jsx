import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>NotFound</p>
      <Link to="/">Click here to go back to home page</Link>
    </div>
  );
};

export default NotFound;
