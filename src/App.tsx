import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./sections/About/AboutSection";
import { BackgroundTheme } from "./AppStyle";
import HeroImage from "./components/Hero/HeroImage";
import MissionSection from "./sections/Mission/MissionSection";
import FAQSection from "./sections/FAQ/FAQSection";
import LocationSection from "./sections/Location/LocationSection";
import PartnerSection from "./sections/Partners/PartnerSection";
import ScheduleSection from "./sections/Schedule/ScheduleSection";
import TeamSection from "./sections/Team/TeamSection";
import SocialMediaSection from "./sections/SocialMedia/SocialMediaSection";

const titleNames = [
  { title: "About", link: "#about" },
  { title: "FAQ", link: "#faq" },
  { title: "Location", link: "#location" },
  { title: "Partners", link: "#partners" }
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
        <LocationSection />
        <PartnerSection />
        <SocialMediaSection />
      </BackgroundTheme>
    </div>
  );
};

export default App;
