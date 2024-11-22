import React from "react";
import WelcomeSection from "./welcomeSection";
import AboutMeSection from "./aboutmeSection";
import LanguagesSection from "./languagesSection";
import CurrentJobSection from "./currentjobSection";
import StudiesSection from "./studiesSection";
import ProjectsSection from "./projectsSection";
import FooterSection from "./footerSection";

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