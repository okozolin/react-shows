import React from "react";
import "./showDetails.css";

interface Props {
  show: any;
}
export const ShowDetails: React.FC<Props> = ({ show }) => {
  return (
    <div id="details-container">
      {show && show.image && (
        <>
          <div id="image">
            <img src={show.image.medium}></img>
          </div>
          <div id="details-text">
            <div id="title">{show.name}</div>
            <div id="summary">{show.summary}</div>
          </div>
        </>
      )}
    </div>
  );
};
