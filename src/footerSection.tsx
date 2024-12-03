import gitHubLogo from "./assets/githublogo.svg";
import linkedInLogo from "./assets/linkedinlogo.svg";
import instagramLogo from "./assets/instagramlogo.svg";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center py-6 md:py-10 lg:py-12 bg-[#EBFFE7] text-[#232323] space-y-6 md:space-y-8">
      <div className="flex space-x-4 md:space-x-6 lg:space-x-8 flex-wrap justify-center">
        <a
          href="https://github.com/Edmenin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={gitHubLogo}
            alt="GitHub Logo"
            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] transform hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eduardo-menin-09a833270/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInLogo}
            alt="LinkedIn Logo"
            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] transform hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/_edumenin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramLogo}
            alt="Instagram Logo"
            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] transform hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
      <h1 className="text-xs md:text-sm lg:text-base font-medium text-center px-4">
        {t("footerRights")}
      </h1>
      <div className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-[#232323]"></div>
    </div>
  );
}

export default ProjectsSection;