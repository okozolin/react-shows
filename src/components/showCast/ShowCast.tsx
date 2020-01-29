import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { TParams } from "../../interfaces/interfaces";

const ShowCast = ({ match }: RouteComponentProps<TParams>) => {
  console.log("match", match);
  const { id } = match.params;
  console.log("match.params:", match.params.id);
  return <>{id && <div>this is Cast info {id}</div>}</>;
};
export default withRouter(ShowCast);
