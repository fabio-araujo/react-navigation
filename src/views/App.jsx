import "./App.css";
import React from "react";
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { BrowserRouter } from "react-router-dom"; // essa importação mudou

const App = (props) => (
  <div className="App">
    <BrowserRouter>
      <Menu></Menu>
      <Content></Content>
    </BrowserRouter>
  </div>
);

export default App;
