import React, { Component, ChangeEvent } from "react";
import "./list.css";
import { Tile } from "../tile/Tile";

interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({ shows }) => {
  return (
    <div className="list">
      {
      shows.length === 0 ?
      <div>No Results yet</div> :
      shows && shows.length > 0 &&
      shows.map((item: any) => (
        <div key={item.show.id}>
          <Tile show={item.show}></Tile>
        </div>
      ))}
    </div>
  );
};
