import image3 from "./assets/image3.svg";
import { motion } from "framer-motion";

function StudiesSection() {
  return (
    <div className="relative flex items-center justify-between py-[110px] bg-[#232323] text-[#EBFFE7] px-[160px]">
      <motion.div
        className="flex flex-col items-start w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-4xl font-semibold mb-[100px]">Estudos</h1>
        <p className="text-2xl font-normal text-justify">
          Aos 12 anos, iniciei minha jornada na área de tecnologia com meu
          primeiro curso de informática, começando pelo módulo básico. Após a
          conclusão, avancei para o módulo aplicado. Aos 17 anos, participei de
          um curso de linguagens e tecnologias para desenvolvimento front-end,
          oferecido pela B7 Web. Esse curso consolidou minha paixão pela
          programação e pelo design. Atualmente, com 19 anos, estou cursando
          minha primeira graduação em Análise e Desenvolvimento de Sistemas,
          pela Unidep. Para o futuro, planejo ampliar minha formação acadêmica
          com uma segunda graduação.
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-1/2 pl-[100px]"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src={image3} alt="imagem 3" className="w-[500px] h-[500px]" />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      <div className="absolute top-[-90px] left-[-170px] w-[250px] h-[210px] rotate-[34deg] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default StudiesSection;