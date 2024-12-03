import JS from "./assets/jslogo.svg";
import TS from "./assets/tslogo.svg";
import CSS from "./assets/csslogo.svg";
import HTML from "./assets/htmllogo.svg";
import GIT from "./assets/gitlogo.svg";
import REACT from "./assets/reactlogo.svg";
import FIGMA from "./assets/figmalogo.svg";
import NEXT from "./assets/nextlogo.svg";
import { motion } from "framer-motion";

function LanguagensSection() {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 md:py-[110px] bg-[#232323] text-[#EBFFE7] space-y-8 md:space-y-12">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center mb-4 md:mb-8">
          Linguagens e tecnologias
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
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://www.typescriptlang.org">
          {" "}
          <img
            src={TS}
            alt="TypeScript Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://www.w3schools.com/css/">
          {" "}
          <img
            src={CSS}
            alt="CSS Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
          {" "}
          <img
            src={HTML}
            alt="HTML Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
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
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://git-scm.com/doc">
          <img
            src={GIT}
            alt="GIT Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://help.figma.com/hc/pt-br">
          <img
            src={FIGMA}
            alt="Figma Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a href="https://nextjs.org">
          {" "}
          <img
            src={NEXT}
            alt="Next.js Logo"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition-transform duration-200"
          />
        </a>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      <div className="absolute top-[-108px] left-[-170px] md:top-[-137px] lg:top-[-137px] md:left-[-170px] w-[210px] h-[180px] md:w-[250px] md:h-[210px] rotate-[34deg] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default LanguagensSection;