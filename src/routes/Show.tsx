import React, { useState, useEffect } from "react";
import { ShowDetails } from "../components/showDetails/ShowDetails";
import {
  useParams,
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import TabNav from "../components/tabNav/TabNav";
import ShowSeasons from "../components/showSeasons/ShowSeasons";
import ShowCast from "../components/showCast/ShowCast";

interface Props {}

export const Show: React.FC<Props> = () => {
  const { id } = useParams();
  const [show, setShow] = useState<object | null>({});
  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => {
        setShow(data);
      });
  }, [id]);

  return (
    <BrowserRouter>
      <div>
        <ShowDetails show={show} />
      </div>
      <div>
        <TabNav id={id} />
        <Switch>
          <Route exact path="/shows/:id/cast">
            <ShowCast />
          </Route>
          <Route exact path="/shows/:id/season">
            <ShowSeasons />
          </Route>
        </Switch>

        {/* <Redirect to="/cast" /> */}
      </div>
    </BrowserRouter>
  );
};
