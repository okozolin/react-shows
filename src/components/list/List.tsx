import React, { Component } from "react";
import { Tile } from "../tile/Tile";

interface Props {
  shows: any;
}

export const List: React.FC<Props> = ({shows}) => {
  return (
    <div>
      {shows.map((show:any) => (
        <div> {show.title}</div>
      ))}
    </div>;

  )
};

}

export default class List extends Component<Props, State> {
  state = {};
  const promise = new Promise((resolve, reject) => {
      resolve(shows)
  })

  promise.then((res) => {
    render() {
      return (
        <div>
          List
          <Tile name={"hello"} pic="aaa"></Tile>
        </div>
      );
    }
  });
}
