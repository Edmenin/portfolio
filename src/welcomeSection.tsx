import gitHubLogo from './assets/githublogo.svg'

function WelcomeSection() {
  return (
    <div className="relative flex items-center justify-between h-screen bg-[#EBFFE7] text-[#232323] px-[200px]">
      <div className="flex flex-col items-start">
        <h1 className="text-8xl font-bold mb-6 animate-pulse">Hi there!</h1>
        <p className="text-3xl font-semibold mb-[300px] animate-pulse">
          I'm Eduardo, a web developer.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Edmenin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitHubLogo} alt="GitHub Logo"
              className="w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-menin-09a833270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="dist/assets/linkedinlogo.svg"
              alt="LinkedIn Logo"
              className="w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
      <div>
        {" "}
        <div className="mb-[-17px] relative z-10">
          <img
            src="./assets/image1.svg"
            alt="Image 1"
            className="w-[600px] h-[600px]"
          />
        </div>
      </div>
      <div className="absolute bottom-[-90px] right-[-449px]">
        <div className="w-[1250px] h-[1200px] bg-[#232323] rotate-[-60deg] "></div>
      </div>
      <div className="absolute bottom-[-610px] right-[-436px]">
        <div className="w-[1250px] h-[1200px] bg-[#ffffff] opacity-[5%] rotate-[-25deg] "></div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default WelcomeSection;