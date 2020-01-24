import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./sections/About/AboutSection";
import { BackgroundTheme } from "./AppStyle";
import HeroImage from "./components/Hero/HeroImage";
import MissionSection from "./sections/Mission/MissionSection";
import FAQSection from "./sections/FAQ/FAQSection";

const titleNames = [
  { title: "MenuItem1", link: "https://www.google.com" },
  { title: "MenuItem2", link: "https://wwww.maps.google.com" }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar titles={titleNames} />
      <HeroImage></HeroImage>
      <BackgroundTheme>
        <AboutSection />
        <MissionSection />
        <FAQSection />
      </BackgroundTheme>
    </div>
  );
};

export default App;
