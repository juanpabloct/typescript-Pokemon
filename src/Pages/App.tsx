import React from "react";
import logo from "./logo.svg";
import { SearchGeneration } from "../components/SearchGeneration";
import { SearchName } from "../components/SearchName";
import { Navbar } from "../components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchGeneration />
      <SearchName />
    </div>
  );
}

export default App;
