import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Card3 from "../components/card3";
import Card4 from "../components/card4";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center py-[70px] bg-[#181818] text-[#ffffff]">
      <motion.h1
        className="text-xl md:text-2xl font-semibold mb-6 md:mb-10"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </motion.h1>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4c248b]"></div>
      <div className="absolute top-[-182px] md:top-[-171px] right-[-170px] w-[210px] md:w-[250px] h-[262px] rotate-[34deg] bg-[#4c248b]"></div>
    </div>
  );
}

export default ProjectsSection;