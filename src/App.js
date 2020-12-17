import React from "react";

import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import axios from "axios";

import "./App.css";
import "./scss/main.scss";

import "./typewriter";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.rajaongkir.com/starter/city", {
        headers: { key: "34962f8f482de745a6484c17eebc273d" },
      })
      .then((response) => {
        console.log(response.data.rajaongkir.results);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
