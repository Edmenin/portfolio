import image2 from "/assets/image2.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function CurrentJobSection() {
  const { t } = useTranslation();

  return (
    <div className="font-raleway relative flex flex-col lg:flex-row items-center justify-between py-10 md:py-[70px] px-8 bg-[#181818] text-[#ffffff] lg:pr-[150px]">
      <motion.div
        className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:order-2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-xl md:text-2xl font-semibold mb-6">
          {t("currentJobTitle")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-normal text-justify xl:pr-[60px]">
          {t("currentJobDescription")}
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-full lg:w-1/2 lg:order-1"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={image2}
          alt="Current Job Image"
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] animate-sway"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4c248b]"></div>
      <div className="absolute top-[-119px] right-[-185px] w-[200px] h-[190px] md:top-[-124px] md:right-[-170px] md:w-[250px] md:h-[210px] rotate-[34deg] bg-[#4c248b]"></div>
    </div>
  );
}

export default CurrentJobSection;