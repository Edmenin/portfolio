import { motion } from "framer-motion";
import Eduardo from "./assets/eduardomenin.svg";

function AboutmeSection() {
  return (
    <div className="relative flex items-center justify-between py-[110px] bg-[#232323] text-[#EBFFE7] px-[160px]">
      <motion.div
        className="flex flex-col items-start w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-4xl font-semibold mb-[100px]">
          Olá, seja bem-vindo ao meu portfólio! 🚀
        </h1>
        <p className="text-2xl font-normal text-justify">
          Sou Eduardo, um desenvolvedor apaixonado por tecnologia, com foco em
          criar soluções inovadoras e eficientes. Meu trabalho combina
          criatividade e lógica para entregar interfaces elegantes e sistemas
          robustos. Tenho maior experiência no desenvolvimento front-end, mas
          estou sempre disposto a aprender novas práticas e tecnologias!
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-1/2 pl-[100px]"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={Eduardo}
          alt="Eduardo Menin"
          className="w-[500px] h-[500px]"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default AboutmeSection;