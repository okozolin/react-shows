import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { TParams } from "../../interfaces/interfaces";
import "./showCast.css";

const ShowCast = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const [cast, setCast] = useState();
  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${id}/cast`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setCast(data);
      });
  }, [id]);

  return (
    <div className="tab__content">
      {/* {id && <div>this is Cast info {id}</div>} */}
      {cast && cast.length > 0
        ? cast.map((item: any) => (
            <div className="cast__person" key={item.person.id}>
              {item.person.image && (
                <div>
                  <h5 className="cast__person__name">{item.person.name}</h5>
                  <img className="cast__img" src={item.person.image.medium} />
                </div>
              )}
            </div>
          ))
        : "no cast"}
    </div>
  );
};
export default withRouter(ShowCast);
