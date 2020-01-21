import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./sections/About/About";
import { BackgroundTheme } from "./AppStyle";

const titleNames = [
  { title: "MenuItem1", link: "https://www.google.com" },
  { title: "MenuItem2", link: "https://wwww.maps.google.com" }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar titles={titleNames} />
      <BackgroundTheme>
        <About />
      </BackgroundTheme>
    </div>
  );
};

export default App;
