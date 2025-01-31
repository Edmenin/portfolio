import { useTranslation } from "react-i18next";
import Tooltip from "../components/tooltip";
import Download from "../components/download";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-between py-6 md:py-10 bg-[#4c248b] text-[#181818] space-y-6">
      <div className="flex justify-center">
        <Tooltip />
      </div>
      <h1 className="text-xs md:text-sm lg:text-base font-normal text-center px-4 text-[#ffffff]">
        {t("footerRights")}
      </h1>
      <div className="flex flex-row items-center justify-center space-x-4 text-xs md:text-sm lg:text-base font-normal text-center px-4 text-[#ffffff]">
        <p>{t("download")}</p>
        <Download />
      </div>
    </div>
  );
}

export default ProjectsSection;