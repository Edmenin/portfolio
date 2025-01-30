import image3 from "/assets/image3.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function StudiesSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between py-10 md:py-[70px] bg-[#181818] text-[#ffffff] px-6 md:px-10 lg:px-[130px]">
      <motion.div
        className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-[30px] xl:px-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-xl md:text-2xl font-semibold mb-8 :mb-[100px] text-center lg:text-left xl:pl-[70px]">
          {t("studiesTitle")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-normal text-justify xl:pl-[70px]">
          {t("studiesDescription")}
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-full lg:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={image3}
          alt="Studies Image"
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] animate-sway"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4c248b]"></div>
      <div className="absolute top-[-75px] left-[-170px] w-[200px] h-[200px] md:top-[-130px] lg:top-[-75px] lg:left-[-130px] rotate-[34deg] bg-[#4c248b]"></div>
    </div>
  );
}

export default StudiesSection;