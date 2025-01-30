import { useTranslation } from "react-i18next";
import Tooltip from "../components/tooltip";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-between py-6 md:py-10 lg:py-12 bg-[#4c248b] text-[#181818] space-y-6 md:space-y-8">
      <div className="flex justify-center">
        <Tooltip />
      </div>
      <h1 className="text-xs md:text-sm lg:text-base font-normal text-center px-4 text-[#ffffff]">
        {t("footerRights")}
      </h1>
      <div className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-[#181818]"></div>
    </div>
  );
}

export default ProjectsSection;