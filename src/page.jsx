import React from "react";
import WelcomeSection from "./sections/welcomeSection";
import AboutMeSection from "./sections/aboutmeSection";
import LanguagesSection from "./sections/languagesSection";
import CurrentJobSection from "./sections/currentjobSection";
import StudiesSection from "./sections/studiesSection";
import ProjectsSection from "./sections/projectsSection";
import FooterSection from "./sections/footerSection";

function Page() {
  return (
    <div className="overflow-hidden">
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