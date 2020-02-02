import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";

const titleNames = [
  { title: "About", link: "#about" },
  { title: "Mission", link: "#mission" },
  { title: "FAQ", link: "#faq" },
  { title: "Location", link: "#location" },
  { title: "Partners", link: "#partners" }
];

const LazyLoadedSections = React.lazy(() =>
  import("./sections/LazyLoadedSections")
);

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar titles={titleNames} />
      <Hero />
      <Suspense fallback={null}>
        <LazyLoadedSections />
      </Suspense>
    </div>
  );
};

export default App;
