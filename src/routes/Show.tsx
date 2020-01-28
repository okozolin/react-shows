import React, { useState, useEffect } from "react";
import { ShowDetails } from "../components/showDetails/ShowDetails";
import { useParams } from "react-router-dom";

interface Props {}

export const Show: React.FC<Props> = () => {
  const { id } = useParams();
  const [show, setShow] = useState<object | null>({});
  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setShow(data);
      });
  }, [id]);

  return (
    <div>
      <ShowDetails show={show} />
    </div>
  );
};
