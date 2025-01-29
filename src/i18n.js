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

      technologiesTitle: "Languages and Technologies 🌐",
      currentJobTitle: "Current Job 💻",
      currentJobDescription:
        "I currently work as a junior full-stack developer at CashLocal, having recently transitioned from front-end development. In this role, I am continuously learning and improving my skills in new technologies, ranging from back-end development to database management.",
      studiesTitle: "Studies 📚",
      studiesDescription:
        "At the age of 12, I began my journey in the technology field with my first computer course, starting with the basic module. After completing it, I moved on to the applied module. At 17, I attended a course on languages and technologies for front-end development offered by B7 Web. This course solidified my passion for programming and design. Currently, at 19, I am pursuing my first degree in Systems Analysis and Development at Unidep. For the future, I plan to expand my academic education with a second degree.",
      projectsTitle: "My Projects 🚧",
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
      technologiesTitle: "Linguagens e tecnologias 🌐",
      currentJobTitle: "Atual emprego 💻",
      currentJobDescription:
        "Atualmente, atuo como desenvolvedor full-stack júnior na CashLocal, tendo migrado recentemente do front-end. Nesse contexto, estou constantemente aprendendo e me aperfeiçoando em novas tecnologias, abrangendo desde o back-end até a gestão de bancos de dados.",
      studiesTitle: "Estudos 📚",
      studiesDescription:
        "Aos 12 anos, iniciei minha jornada na área de tecnologia com meu primeiro curso de informática, começando pelo módulo básico. Após a conclusão, avancei para o módulo aplicado. Aos 17 anos, participei de um curso de linguagens e tecnologias para desenvolvimento front-end, oferecido pela B7 Web. Esse curso consolidou minha paixão pela programação e pelo design. Atualmente, com 19 anos, estou cursando minha primeira graduação em Análise e Desenvolvimento de Sistemas, pela Unidep. Para o futuro, planejo ampliar minha formação acadêmica com uma segunda graduação.",
      projectsTitle: "Meus projetos 🚧",
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