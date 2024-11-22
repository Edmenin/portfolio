

function ProjectsSection() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[350px] bg-[#EBFFE7] text-[#232323] space-y-8">
      <div className="flex space-x-8">
        <a
          href="https://github.com/Edmenin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/images/githublogo.svg"
            alt="GitHub Logo"
            className="w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eduardo-menin-09a833270/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/images/linkedinlogo.svg"
            alt="LinkedIn Logo"
            className="w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/_edumenin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/images/instagramlogo.svg"
            alt="Instagram Logo"
            className="w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
      <h1 className="text-sm font-medium">
        @ Todos os direitos reservados a Eduardo Menin - 2024.
      </h1>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#232323]"></div>
    </div>
  );
}

export default ProjectsSection;