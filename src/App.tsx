import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { List } from "./components/list/List";
import { prependOnceListener } from "cluster";

class App extends React.Component<Props, State> {
  // const App: React.FC = () => {
  state = {
    q: ""
  };

  handleSearchChange = (event: ChangeEvent<HTMLInputElemnt>) => {
    const query = event.target.value;
    this.setState({ q: query });
  };
  render() {
    const { q } = this.state;
    return (
      <div className="App">
        <Header handleSearchChange={this.handleSearchChange} q={q}></Header>
        <List></List>
      </div>
    );
  }
}

export default App;
