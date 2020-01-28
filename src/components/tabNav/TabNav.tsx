import React from "react";
import { Link } from "react-router-dom";

const TabNav = () => {
  return (
    <div className="tab__nav">
      <div className="cast__item">
        <Link className="tab__link" to="/cast">
          Cast
        </Link>
      </div>
      <div className="seasons_item">
        <Link className="tab__link" to="/seasons">
          Seasons
        </Link>
      </div>
    </div>
  );
};

export default TabNav;
