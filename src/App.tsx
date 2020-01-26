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
  { title: "MenuItem1", link: "" },
  { title: "MenuItem2", link: "" }
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
        <ScheduleSection />
        <PartnerSection />
        <TeamSection />
        <SocialMediaSection />
      </BackgroundTheme>
    </div>
  );
};

export default App;
