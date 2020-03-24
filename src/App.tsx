import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import SocialMediaSection from "./sections/SocialMedia/SocialMediaSection";
import FAQSection from "./sections/FAQ/FAQSection";
import ScheduleSection from "./sections/Schedule/ScheduleSection";
import UpdateSection from "./sections/Updates/UpdateSection";
import GlobalFonts from "./fonts/fonts";
import Alerts from "./components/Alerts";
import { Holder } from "./AppStyle";
import { NavBarMargin } from "./components/NavBar/NavBarStyle";
import LocationSection from "./sections/Location/LocationSection";

const titleNames = [
  { title: "About", link: "/#about" },
  { title: "Tracks", link: "/#tracks" },
  { title: "FAQ", link: "/#faq" },
  { title: "Location", link: "/#location" },
  { title: "Schedule", link: "/#schedule" },
  { title: "Partners", link: "/#partners" }
];

const LazyLoadedSections = React.lazy(() =>
  import("./sections/LazyLoadedSections")
);

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalFonts />
      <NavBarMargin size={100} />

      <BrowserRouter>
        <Switch>
          <Route path="/updates" component={Updates} />
          <Route path="/day-of-event" component={DayOfEvent} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <Holder>
        <Alerts />
        <NavBar titles={titleNames} />
      </Holder>
      <Hero />
      <Suspense fallback={null}>
        <LazyLoadedSections />
      </Suspense>
    </div>
  );
};

const Updates: React.FC = () => {
  return (
    <div>
      <Holder>
        <NavBar titles={titleNames} />
      </Holder>
      <UpdateSection />
      <SocialMediaSection />
    </div>
  );
};

const DayOfEvent = () => {
  return (
    <div>
      <Holder>
        <NavBar titles={titleNames} />
      </Holder>
      <ScheduleSection sectionNumber={4} />
      <FAQSection />
      <LocationSection sectionNumber={7} />
    </div>
  );
};

export default App;
