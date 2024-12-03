import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hello!",
      introduction: "I'm Eduardo Menin.",
      welcomePortfolio: "Welcome to my portfolio! 🚀",
      aboutMeParagraph:
        "I'm Eduardo, a developer passionate about technology, focused on creating innovative and efficient solutions. My work combines creativity and logic to deliver elegant interfaces and robust systems. I have more experience in front-end development, but I'm always willing to learn new practices and technologies!",

      technologiesTitle: "Languages and Technologies",
      currentJobTitle: "Current Job",
      currentJobDescription:
        "I am currently a developer and web designer at the Secretariat of Science, Technology, and Innovation of Pato Branco - Paraná. My mission is to develop systems and platforms that optimize governmental processes and facilitate communication between the public authorities and the population. I am directly involved in projects that positively impact citizens' lives, promoting access to knowledge and technology.",
      studiesTitle: "Studies",
      studiesDescription:
        "At the age of 12, I began my journey in the technology field with my first computer course, starting with the basic module. After completing it, I moved on to the applied module. At 17, I attended a course on languages and technologies for front-end development offered by B7 Web. This course solidified my passion for programming and design. Currently, at 19, I am pursuing my first degree in Systems Analysis and Development at Unidep. For the future, I plan to expand my academic education with a second degree.",
      projectsTitle: "My Projects",
      projectsDescription: "Under construction...",
      footerRights: "© All rights reserved to Eduardo Menin - 2024.",
    },
  },
  pt: {
    translation: {
      greeting: "Olá!",
      introduction: "Eu sou Eduardo Menin.",
      welcomePortfolio: "Seja bem-vindo ao meu portfólio! 🚀",
      aboutMeParagraph:
        "Sou Eduardo, um desenvolvedor apaixonado por tecnologia, com foco em criar soluções inovadoras e eficientes. Meu trabalho combina criatividade e lógica para entregar interfaces elegantes e sistemas robustos. Tenho maior experiência no desenvolvimento front-end, mas estou sempre disposto a aprender novas práticas e tecnologias!",
      technologiesTitle: "Linguagens e tecnologias",
      currentJobTitle: "Atual emprego",
      currentJobDescription:
        "Atualmente, sou desenvolvedor e web designer da Secretaria de Ciência, Tecnologia e Inovação de Pato Branco - Paraná. Aqui, minha missão é desenvolver sistemas e plataformas que otimizam os processos governamentais e facilitam a comunicação entre o poder público e a população. Estou diretamente envolvido em projetos que impactam positivamente a vida de cidadãos, promovendo o acesso ao conhecimento e à tecnologia.",
      studiesTitle: "Estudos",
      studiesDescription:
        "Aos 12 anos, iniciei minha jornada na área de tecnologia com meu primeiro curso de informática, começando pelo módulo básico. Após a conclusão, avancei para o módulo aplicado. Aos 17 anos, participei de um curso de linguagens e tecnologias para desenvolvimento front-end, oferecido pela B7 Web. Esse curso consolidou minha paixão pela programação e pelo design. Atualmente, com 19 anos, estou cursando minha primeira graduação em Análise e Desenvolvimento de Sistemas, pela Unidep. Para o futuro, planejo ampliar minha formação acadêmica com uma segunda graduação.",
      projectsTitle: "Meus projetos",
      projectsDescription: "em construção...",
      footerRights: "© Todos os direitos reservados à Eduardo Menin - 2024.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;