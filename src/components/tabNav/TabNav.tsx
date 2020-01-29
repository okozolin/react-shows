import React from "react";
import { Link } from "react-router-dom";
import { Props } from "../../interfaces/interfaces";

const TabNav = ({ id }: Props) => {
  return (
    <div className="tab__nav">
      <div className="cast__item">
        <Link className="tab__link" to={`/shows/${id}/cast`}>
          Cast
        </Link>
      </div>
      <div className="seasons_item">
        <Link className="tab__link" to={`/shows/${id}/season`}>
          Seasons
        </Link>
      </div>
    </div>
  );
};

export default TabNav;
