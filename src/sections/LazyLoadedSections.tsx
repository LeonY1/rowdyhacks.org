import React from "react";
import { BackgroundTheme } from "../AppStyle";
import AboutSection from "./About/AboutSection";
import MissionSection from "./Mission/MissionSection";
import FAQSection from "./FAQ/FAQSection";
import LocationSection from "./Location/LocationSection";
import PartnerSection from "./Partners/PartnerSection";
import SocialMediaSection from "./SocialMedia/SocialMediaSection";
import ScheduleSection from "./Schedule/ScheduleSection";

function LazyLoadedSections() {
  return (
    <BackgroundTheme>
      <AboutSection />
      <MissionSection />
      <FAQSection />
      <LocationSection sectionNumber={3} />
      <ScheduleSection sectionNumber={8} />
      <PartnerSection />
      <SocialMediaSection />
    </BackgroundTheme>
  );
}

export default LazyLoadedSections;
