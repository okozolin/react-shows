import React, { Component } from "react";
import "./list.css";

interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({ shows }) => {
  return (
    <div className="list">
      {shows.map((item: any) => (
        <div key={item.show.id}> {item.show.name}</div>
      ))}
    </div>
  );
};
