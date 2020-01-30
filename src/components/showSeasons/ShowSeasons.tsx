import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { TParams } from "../../interfaces/interfaces";
import "./showSeasons.css";

const ShowSeasons = ({ match }: RouteComponentProps<TParams>) => {
    const { id } = match.params;
    const [seasons, setSeasons] = useState();
    useEffect(() => {
      fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
        .then(res => 
            res.json())
        .then(data => {
          console.log("data", data);
          setSeasons(data);
        });
    }, [id]);

    return (
        <div className="tab__content">
          {seasons && seasons.length > 0 
          ? (<div>
                <h4>Premiere Date {seasons[0].premiereDate}</h4>
                { seasons[0].episodeOrder && (
                    <div>
                    <h4>Episodes order {seasons[0].episodeOrder}</h4>
                    </div>
                )}
            </div>
          )
          : "No seasons info yet"}
        </div>
      );
};

export default withRouter(ShowSeasons);
