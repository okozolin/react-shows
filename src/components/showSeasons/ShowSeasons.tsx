import React from "react";

interface Props {
  id: string | undefined;
}

const ShowSeasons: React.FC<Props> = ({ id }) => {
  return <div>here is Sesons info {id}</div>;
};

export default ShowSeasons;
