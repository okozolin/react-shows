import React from "react";
import "./tile.css";
import { Link } from "react-router-dom";

interface Props {
  show: any;
}
export const Tile: React.FC<Props> = ({ show }) => {
  const { id, image, name } = show;
  return (
    <div className="list__tile">
      <Link to={`/shows/${id}`}>
        <div>
          <img
            src={
              image
                ? image.medium
                : "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg"
            }
            alt={name}
          />
        </div>
        <div>{name} </div>
      </Link>
    </div>
  );
};
