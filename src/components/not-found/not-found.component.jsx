import React from "react";
import { Link } from "react-router-dom";

import "./not-found.styles.scss";

const PageNotFound = () => {
  return (
    <div className="error-container">
      <div className="error-image-container"></div>
      <div className="error-text">
        boooooooo! <br />
        Nothing here except me!
        <br />
        Go back <Link to="/">home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
