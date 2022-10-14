import React from "react";
import BannerImage from "./components/BannerImage";
import AlbumMaker from "./components/AlbumMaker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <h1>Welcome to my photojournal</h1>
        <h3>Lucas Macedo</h3>
        <AlbumMaker />
      </header>
    </div>
  );
}

export default App;
