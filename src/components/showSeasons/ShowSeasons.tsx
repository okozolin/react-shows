import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { TParams } from "../../interfaces/interfaces";

const ShowSeasons = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  return <div>here is Sesons info {id}</div>;
};

export default withRouter(ShowSeasons);
