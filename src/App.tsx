import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { List } from "./components/list/List";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <List></List>
    </div>
  );
};

export default App;
