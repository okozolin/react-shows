import React, { Component } from "react";
import "./list.css";
import { Tile } from "../tile/Tile";

interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({ shows }) => {
  return (
    <div className="list">
      {shows.map((item: any) => (
        <div key={item.show.id}>
          <Tile
            name={item.show.name}
            pic={
              item.show.image
                ? item.show.image.medium
                : "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg"
            }
          ></Tile>
        </div>
      ))}
    </div>
  );
};
