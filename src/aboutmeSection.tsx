import { motion } from "framer-motion";
import Eduardo from "./assets/eduardomenin.svg";

function AboutmeSection() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between py-10 lg:py-[110px] bg-[#232323] text-[#EBFFE7] px-6 md:px-10 lg:px-[120px]">
      <motion.div
        className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-[30px] xl:px-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl xl:text-3xl font-semibold mb-8 lg:mb-[100px] text-center lg:text-left">
          Seja bem-vindo ao meu portfólio! 🚀
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-justify">
          Sou Eduardo, um desenvolvedor apaixonado por tecnologia, com foco em
          criar soluções inovadoras e eficientes. Meu trabalho combina
          criatividade e lógica para entregar interfaces elegantes e sistemas
          robustos. Tenho maior experiência no desenvolvimento front-end, mas
          estou sempre disposto a aprender novas práticas e tecnologias!
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={Eduardo}
          alt="Eduardo Menin"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[430px] lg:h-[430px] xl:w-[500px] xl:h-[500px] "
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] lg:h-[3px] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default AboutmeSection;