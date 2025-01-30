import JS from "/assets/jslogo.svg";
import TS from "/assets/tslogo.svg";
import CSS from "/assets/csslogo.svg";
import HTML from "/assets/htmllogo.svg";
import GIT from "/assets/gitlogo.svg";
import REACT from "/assets/reactlogo.svg";
import FIGMA from "/assets/figmalogo.svg";
import TAILWIND from "/assets/tailwindlogo.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function LanguagensSection() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center py-10 md:py-[90px] bg-[#181818] text-[#ffffff] space-y-8">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl font-semibold text-center mb-4">
          {t("technologiesTitle")}
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
          <img
            src={JS}
            alt="JavaScript Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://www.typescriptlang.org">
          <img
            src={TS}
            alt="TypeScript Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://www.w3schools.com/css/">
          <img
            src={CSS}
            alt="CSS Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
          <img
            src={HTML}
            alt="HTML Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <a href="https://react.dev">
          <img
            src={REACT}
            alt="React Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://git-scm.com/doc">
          <img
            src={GIT}
            alt="GIT Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://help.figma.com/hc/pt-br">
          <img
            src={FIGMA}
            alt="Figma Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://tailwindcss.com">
          <img
            src={TAILWIND}
            alt="TailwindCSS Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] hover:scale-110 transition-transform duration-200"
          />
        </a>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4c248b]"></div>
      <div className="absolute top-[-108px] left-[-190px] md:top-[-137px] lg:top-[-119px] md:left-[-170px] w-[210px] h-[180px] md:w-[240px] md:h-[200px] rotate-[34deg] bg-[#4c248b]"></div>
    </div>
  );
}

export default LanguagensSection;