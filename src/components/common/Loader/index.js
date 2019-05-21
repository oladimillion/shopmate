import React from "react";

import "./index.css";

const Loader = ({ className }) => {
  return (
    <div 
      className={`loader flex ${className || ""}`}>
      <div className="margin__auto flex bars">
        <span className="inline__block flex__one margin__vert__auto bar"></span>
        <span className="inline__block flex__one margin__vert__auto bar"></span>
        <span className="inline__block flex__one margin__vert__auto bar"></span>
      </div>
    </div>
  )
}

export default Loader;
 
