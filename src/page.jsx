import React from "react";
import WelcomeSection from "./welcomeSection";
import AboutMeSection from "./components/aboutmeSection";
import LanguagesSection from "./components/languagesSection";
import CurrentJobSection from "./components/currentjobSection";
import StudiesSection from "./components/studiesSection";
import ProjectsSection from "./components/projectsSection";
import FooterSection from "./components/footerSection";

function Page() {
  return (
    <div>
      <WelcomeSection />
      <AboutMeSection />
      <LanguagesSection />
      <CurrentJobSection />
      <StudiesSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}

export default Page;