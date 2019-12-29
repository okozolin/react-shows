import React from "react";

interface ITileProps {
  name: string;
  pic: string;
}
export const Tile: React.FC<ITileProps> = ({ name, pic }) => {
  return <div>{name}</div>;
};
