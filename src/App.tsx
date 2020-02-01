import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./sections/About/AboutSection";
import { BackgroundTheme } from "./AppStyle";
import MissionSection from "./sections/Mission/MissionSection";
import FAQSection from "./sections/FAQ/FAQSection";
import LocationSection from "./sections/Location/LocationSection";
import PartnerSection from "./sections/Partners/PartnerSection";
import SocialMediaSection from "./sections/SocialMedia/SocialMediaSection";
import Hero from "./sections/Hero/Hero";

const titleNames = [
  { title: "About", link: "#about" },
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
