import { motion } from "framer-motion";

function ProjectsSection() {
  return (
    <div className="relative flex flex-col items-center justify-center py-[300px] bg-[#232323] text-[#EBFFE7] space-y-12">
      <motion.h1
        className="text-4xl font-semibold text-center"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Meus projetos
      </motion.h1>
      <motion.h1
        className="text-2xl"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        em construção...
      </motion.h1>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      <div className="absolute top-[-171px] right-[-170px] w-[250px] h-[210px] rotate-[34deg] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default ProjectsSection;