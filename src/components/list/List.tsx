import React, { Component } from "react";

interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({ shows }) => {
  return (
    <div>
      {shows.map((item: any) => (
        <div key={item.show.id}> {item.show.name}</div>
      ))}
    </div>
  );
};
