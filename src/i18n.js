import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hello!",
      introduction: "I'm Eduardo Menin",
      welcomePortfolio: "Welcome to my portfolio! 🚀",
      aboutMeParagraph:
        "I'm Eduardo, a developer passionate about technology, focused on creating innovative and efficient solutions. My work combines creativity and logic to deliver elegant interfaces and robust systems. I have more experience in front-end development, but I'm always willing to learn new practices and technologies!",

      technologiesTitle: "Languages and Technologies 🌐",
      currentJobTitle: "Current Job 💻",
      currentJobDescription:
        "I currently work as a full-stack developer at CashLocal, having recently transitioned from front-end development. In this role, I am continuously learning and improving my skills in new technologies, ranging from back-end development to database management.",
      studiesTitle: "Studies 📚",
      studiesDescription:
        "At the age of 12, I started my journey in technology with a basic computer course, followed by the applied module. At 17, I participated in a front-end course offered by B7 Web, which consolidated my passion for programming and design. Currently, at 19 years old, I am studying Systems Analysis and Development at Unidep and I plan, in the future, to expand my training with a second degree.",
      projectsTitle: "My Projects 🚧",
      projectsDescription: "Under construction...",
      footerRights: "© All rights reserved to Eduardo Menin - 2025.",
      card1title: "Citizenship Center",
      card1description:
        "The Citizenship Center is a project developed with the aim of offer support to residents of the city of Pato Branco, Paraná, inpartnership with social assistance. My role in the project involved the development of your official website.",
      card2title: "Honey World",
      card2description:
        "Honey World was an event held with the participation of beekeepers and meliponists in the city of Pato Branco, Paraná. My contribution to the project included website development event official.",
      card3title: "Separa",
      card3description:
        "Separa appears as a solution to hunger and the growing issue of food waste. By correctly separating your waste, the user receives cashback. My contribution to project was the development of the system interface.",
      card4title: "Finances App",
      card4description:
        "The Finances App is a website developed by me, completely no-code. It is a complete system, which includes interface, backend and database, without the need to write code, for this, I used the FlutterFlow platform.",
      button: "Back to top",
      download: "Download my CV here",
      aboutMe: "About me",
      languagesAndTechnologies: "Languages and Technologies",
      currentJob: "Current Job",
      studies: "Studies",
      myProjects: "My projects",
      resume: "Curriculum",
    },
  },
  pt: {
    translation: {
      greeting: "Olá!",
      introduction: "Eu sou Eduardo Menin",
      welcomePortfolio: "Seja bem-vindo ao meu portfólio! 🚀",
      aboutMeParagraph:
        "Sou Eduardo, um desenvolvedor apaixonado por tecnologia, com foco em criar soluções inovadoras e eficientes. Meu trabalho combina criatividade e lógica para entregar interfaces elegantes e sistemas robustos. Tenho maior experiência no desenvolvimento front-end, mas estou sempre disposto a aprender novas práticas e tecnologias!",
      technologiesTitle: "Linguagens e tecnologias 🌐",
      currentJobTitle: "Atual emprego 💻",
      currentJobDescription:
        "Atualmente, atuo como desenvolvedor full-stack na CashLocal, tendo migrado recentemente do front-end. Nesse contexto, estou constantemente aprendendo e me aperfeiçoando em novas tecnologias, abrangendo desde o back-end até a gestão de bancos de dados.",
      studiesTitle: "Estudos 📚",
      studiesDescription:
        "Aos 12 anos, iniciei minha jornada na tecnologia com um curso básico de informática, seguido pelo módulo aplicado. Aos 17, participei de um curso de front-end oferecido pela B7 Web, que consolidou minha paixão por programação e design. Atualmente, com 19 anos, estou cursando Análise e Desenvolvimento de Sistemas na Unidep e planejo, no futuro, ampliar minha formação com uma segunda graduação.",
      projectsTitle: "Meus projetos 🚧",
      projectsDescription: "em construção...",
      footerRights: "© Todos os direitos reservados à Eduardo Menin - 2025.",
      card1title: "Centro da Cidadania",
      card1description:
        "O Centro da Cidadania é um projeto desenvolvido com o objetivo de oferecer apoio aos moradores da cidade de Pato Branco, Paraná, em parceria com a assistência social. Meu papel no projeto envolveu o desenvolvimento de seu site oficial.",
      card2title: "Mundo Mel",
      card2description:
        "O Mundo Mel foi um evento realizado com a participação de apicultores e meliponicultores na cidade de Pato Branco, Paraná. Minha contribuição para o projeto incluiu o desenvolvimento do site oficial do evento.",
      card3title: "Separa",
      card3description:
        "O Separa surge como uma solução para a fome e a crescente questão do desperdício de alimentos. Ao separar corretamente seu lixo, o usuário recebe cashback. Minha contribuição no projeto foi o desenvolvimento da interface do sistema.",
      card4title: "App de finanças",
      card4description:
        "O App de finanças é um site desenvolvido por mim, totalmente no-code. Trata-se de um sistema completo, que inclui interface, backend e banco de dados, sem a necessidade de escrever códigos, para isso, utilizei a plataforma FlutterFlow.",
      button: "Voltar ao topo",
      download: "Baixe aqui meu currículo",
      aboutMe: "Sobre mim",
      languagesAndTechnologies: "Linguagens e Tecnologias",
      currentJob: "Atual emprego",
      studies: "Estudos",
      myProjects: "Meus projetos",
      resume: "Currículo",
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