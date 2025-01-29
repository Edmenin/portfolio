import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center py-[100px] bg-[#181818] text-[#ffffff] ">
      <motion.h1
        className="text-xl md:text-3xl font-semibold mb-6 md:mb-10"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t("projectsTitle")}
      </motion.h1>
      <motion.h1
        className="text-base md:text-lg font-normal text-justify"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t("projectsDescription")}
      </motion.h1>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4c248b]"></div>
      <div className="absolute top-[-182px] md:top-[-171px] right-[-170px] w-[210px] md:w-[250px] h-[262px] rotate-[34deg] bg-[#4c248b]"></div>
    </div>
  );
}

export default ProjectsSection;