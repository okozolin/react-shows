import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { List } from "./components/list/List";
import { Tile } from "./components/tile/Tile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <List></List>
      <Tile></Tile>
    </div>
  );
};

export default App;
