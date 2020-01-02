import React, { Component } from "react";

interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({ shows }) => {
  return (
    <div>
      {shows.map((show: any) => (
        <div key={show.show.id}> {show.show.name}</div>
      ))}
    </div>
  );
};
