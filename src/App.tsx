import React, { ChangeEvent } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Redirect } from "react-router";
import { Show } from "./routes/Show";

interface Props {}
interface State {
  q: string;
  shows: any;
}
class App extends React.Component<Props, State> {
  // state init
  state = {
    q: "",
    shows: []
  };

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ q: query });
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ shows: data });
      });
  };
  render() {
    const { q, shows } = this.state;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home">
              <Home
                q={q}
                shows={shows}
                handleSearchChange={this.handleSearchChange}
              />
            </Route>
            <Route path="/shows/:id">
              <Show />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
