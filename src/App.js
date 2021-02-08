import React from "react";

import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

import "./App.css";
import "./scss/main.scss";
import "./typewriter";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
