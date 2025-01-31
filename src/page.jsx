import React from "react";
import Navbar from "./sections/navbar";
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
      <Navbar />
      <section id="welcome" className="">
        <WelcomeSection />
      </section>
      <section id="aboutMe" className="">
        <AboutMeSection />
      </section>
      <section id="languagesAndTechnologies" className="">
        <LanguagesSection />
      </section>
      <section id="currentJob" className="">
        <CurrentJobSection />
      </section>
      <section id="studies" className="">
        <StudiesSection />
      </section>
      <section id="myProjects" className="">
        <ProjectsSection />
      </section>
      <section id="footer" className="">
        <FooterSection />
      </section>
    </div>
  );
}

export default Page;