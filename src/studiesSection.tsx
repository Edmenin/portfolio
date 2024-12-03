import image3 from "./assets/image3.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function StudiesSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between py-10 md:py-[110px] bg-[#232323] text-[#EBFFE7] px-6 md:px-[80px] lg:px-[160px] space-y-10 lg:space-y-0">
      <motion.div
        className="flex flex-col items-center lg:items-start w-full lg:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 xl:mb-10 xl:pl-[70px]">
          {t("studiesTitle")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-normal text-justify xl:pl-[70px]">
          {t("studiesDescription")}
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-full lg:w-1/2 lg:pl-[100px]"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={image3}
          alt="Studies Image"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      <div className="absolute top-[-115px] left-[-170px] w-[200px] h-[200px] md:top-[-130px] lg:top-[-90px] md:w-[250px] md:h-[210px] rotate-[34deg] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default StudiesSection;