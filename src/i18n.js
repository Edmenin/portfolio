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
      currentJobTitle: "Occupation 💻",
      currentJobDescription:
        "I currently work as a full-stack developer at CashLocal, having recently transitioned from front-end development. In this role, I am continuously learning and improving my skills in new technologies, ranging from back-end development to database management.",
      studiesTitle: "Studies 📚",
      studiesDescription:
        "At the age of 12, I started my journey in technology with a basic computer course, followed by the applied module. At 17, I participated in a front-end course offered by B7 Web, which consolidated my passion for programming and design. Currently, at 20 years old, I am studying Systems Analysis and Development - 5th period, at Unidep and I plan, in the future, to expand my training with a second degree.",
      projectsTitle: "My Projects 🚧",
      projectsSubtitle: "See below some of my projects.",
      projectsDescription: "Under construction...",
      footerRights: "© All rights reserved to Eduardo Menin - 2026.",
      card1title: "Citizenship Center",
      card1description:
        "The Citizenship Center is a project developed with the aim of offer support to residents of the city of Pato Branco, Paraná, inpartnership with social assistance. My role in the project involved the development of your official website.",
      card2title: "Honey World",
      card2description:
        "Honey World was an event held with the participation of beekeepers and meliponists in the city of Pato Branco, Paraná. My contribution to the project included website development event official.",
      card3title: "Fábrica de Prêmios – Fugini",
      card3description:
        "Complete promotional management platform built to centralize campaign communication and audience engagement. Consumers can easily register invoices, track their lucky numbers, and check results in real time—ensuring transparency and participation.",
      card4title: "Cliente Premiado – Compesa",
      card4description:
        "High-converting, customized landing page designed for strategic promotion disclosure. With a fully customizable layout, it streamlines the user journey by providing quick access to the regulations, results dashboard, and the official winners list.",
      card5title: "CDL Pop – Joinville",
      card5description:
        "A loyalty ecosystem in partnership between MIME gas stations and CDL Joinville. It operates on a monthly subscription model, offering exclusive benefits to registered members, such as direct discounts per liter of fuel at all network franchises. A solution focused on customer retention and cost savings.",
      card6title: "Ethereon Agro",
      card6description:
        "Robust agricultural management system (ERP) designed to manage harvests and rural operations. Built collaboratively with my partners, it centralizes control of productivity, inputs, and logistics—providing a complete strategic view to optimize farm performance and resource usage.",
      card7title: "Ethereon Tech",
      card7description:
        "High-performance, conversion-focused landing page designed and developed with my partners for lead generation. It combines modern design with optimized information architecture, clearly communicating brand value to turn visitors into potential clients.",
      visit: "Visit",
      button: "Back to top",
      download: "Download my CV here",
      aboutMe: "About me",
      languagesAndTechnologies: "Languages and Technologies",
      currentJob: "Occupation",
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
      currentJobTitle: "Ocupação 💻",
      currentJobDescription:
        "Atualmente, atuo como desenvolvedor full-stack na CashLocal, tendo migrado recentemente do front-end. Nesse contexto, estou constantemente aprendendo e me aperfeiçoando em novas tecnologias, abrangendo desde o back-end até a gestão de bancos de dados.",
      studiesTitle: "Estudos 📚",
      studiesDescription:
        "Aos 12 anos, iniciei minha jornada na tecnologia com um curso básico de informática, seguido pelo módulo aplicado. Aos 17, participei de um curso de front-end oferecido pela B7 Web, que consolidou minha paixão por programação e design. Atualmente, com 20 anos, estou cursando Análise e Desenvolvimento de Sistemas - 5° período, na Unidep e planejo, no futuro, ampliar minha formação com uma segunda graduação.",
      projectsTitle: "Meus projetos 🚧",
      projectsSubtitle: "Veja abaixo alguns dos meus projetos",
      projectsDescription: "em construção...",
      footerRights: "© Todos os direitos reservados à Eduardo Menin - 2026.",
      card1title: "Centro da Cidadania",
      card1description:
        "O Centro da Cidadania é um projeto desenvolvido com o objetivo de oferecer apoio aos moradores da cidade de Pato Branco, Paraná, em parceria com a assistência social. Meu papel no projeto envolveu o desenvolvimento de seu site oficial.",
      card2title: "Mundo Mel",
      card2description:
        "O Mundo Mel foi um evento realizado com a participação de apicultores e meliponicultores na cidade de Pato Branco, Paraná. Minha contribuição para o projeto incluiu o desenvolvimento do site oficial do evento.",
      card3title: "Fábrica de Prêmios – Fugini",
      card3description:
        "Plataforma completa de gestão promocional desenvolvida para centralizar a divulgação da campanha e a interação com o público. O sistema permite que os consumidores realizem o cadastro de notas fiscais de forma intuitiva, acompanhem os números da sorte e verifiquem os resultados em tempo real, garantindo transparência e engajamento.",
      card4title: "Cliente Premiado – Compesa",
      card4description:
        "Landing Page personalizada e de alta conversão, projetada para a divulgação estratégica de promoções. Com um layout totalmente customizável, a página facilita a jornada do cliente ao oferecer acesso rápido ao regulamento, painel de acompanhamento de resultados e a lista oficial de ganhadores, otimizando a comunicação direta com o beneficiário.",
      card5title: "CDL Pop – Joinville",
      card5description:
        "Ecossistema de fidelização com parceria entre os postos MIME e a CDL Joinville. Opera sob um modelo de assinatura mensal, oferecendo benefícios exclusivos aos membros cadastrados, como descontos diretos por litro de combustível em todas as franquias da rede. Uma solução focada em retenção de clientes e economia.",
      card6title: "Ethereon Agro",
      card6description:
        "Sistema robusto de gestão agropecuária (ERP), projetado para o gerenciamento de safras e operações rurais. Desenvolvido de forma colaborativa com meus sócios, o software centraliza o controle de produtividade, insumos e logística, oferecendo uma visão estratégica completa para otimizar o desempenho de fazendas e o aproveitamento de recursos.",
      card7title: "Ethereon Tech",
      card7description:
        "Landing Page estratégica de alta performance, projetada e desenvolvida em conjunto com meus sócios com foco total em conversão e captação de leads. A solução une design moderno a uma arquitetura de informação otimizada, comunicando o valor da marca para transformar visitantes em clientes potenciais.",
      visit: "Visitar",
      button: "Voltar ao topo",
      download: "Baixe aqui meu currículo",
      aboutMe: "Sobre mim",
      languagesAndTechnologies: "Linguagens e Tecnologias",
      currentJob: "Ocupação",
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