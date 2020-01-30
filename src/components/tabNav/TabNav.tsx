import React from "react";
import { Link } from "react-router-dom";
import { Props } from "../../interfaces/interfaces";
import "./TabNav.css";

const TabNav = ({ id }: Props) => {
  return (
    <div className="tab__nav">
      <div className="cast__item">
        <Link className="tab__link" to={`/shows/${id}/cast`}>
          <span>Cast</span>
        </Link>
      </div>
      <div className="seasons__item">
        <Link className="tab__link" to={`/shows/${id}/season`}>
          <span>Seasons</span>
        </Link>
      </div>
    </div>
  );
};

export default TabNav;
