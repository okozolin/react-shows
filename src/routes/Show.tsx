import React, { useState, useEffect } from "react";
import { ShowDetails } from "../components/showDetails/ShowDetails";
import {
  useParams,
  HashRouter,
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
        console.log("data", data);
        setShow(data);
      });
  }, [id]);

  return (
    // <HashRouter basename={`/shows/${id}`}>
    <BrowserRouter>
      <div>
        <ShowDetails show={show} />
      </div>
      <div>
        <TabNav />
        <Switch>
          <Route exact path="/cast">
            <ShowCast id={id} />
          </Route>
          <Route exact path="/seasons">
            <ShowSeasons id={id} />
          </Route>
        </Switch>

        {/* <Redirect to="/cast" /> */}
      </div>
    </BrowserRouter>
  );
};
