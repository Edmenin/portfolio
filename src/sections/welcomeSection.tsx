import { useTranslation } from "react-i18next";
import image1 from "/assets/image1.svg";
import brazilbutton from "/assets/brazilbutton.svg";
import usabutton from "/assets/usabutton.svg";
import Tooltip from "../components/tooltip";
import Typewriter from "typewriter-effect";
function WelcomeSection() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="font-font-raleway overflow-hidden relative flex flex-col lg:flex-row items-center justify-between h-screen bg-[#4c248b] text-[#ffffff] px-6 lg:px-20 xl:px-[200px]">
      <div className="absolute top-4 right-4 flex space-x-4 z-20">
        <button onClick={() => changeLanguage("pt")} className="">
          <img
            src={brazilbutton}
            alt="Brazil"
            className="w-10 h-10 lg:w-12 lg:h-12 hover:scale-110 transition-transform duration-200"
          />
        </button>
        <button onClick={() => changeLanguage("en")} className="">
          <img
            src={usabutton}
            alt="USA"
            className="w-10 h-10 lg:w-12 lg:h-12 hover:scale-110 transition-transform duration-200"
          />
        </button>
      </div>

      <div className="flex flex-col items-center lg:items-start mt-[150px] md:mt-[50px]">
        <div
          className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-6 text-center lg:text-start"
          style={{ minWidth: "5ch" }} 
        >
          {t("greeting")}
        </div>
        <div className="text-xl md:text-xl mb-12 lg:mb-[200px] lg:ml-[7px] text-center lg:text-start">
          <Typewriter
            options={{
              strings: [t("introduction")],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
        <Tooltip />
      </div>

      <img
        src={image1}
        alt="image1"
        className="relative z-10 mb-[100px] lg:mb-[50px] lg:ml-[160px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] animate-sway-rotation"
      />

      <div className="absolute bottom-[-540px] right-0 md:right-[0px] lg:right-[-680px] lg:bottom-0 xl:right-[-600px] 2xl:right-[-440px]">
        <div className="w-[1200px] h-[400px] sm:h-[500px] md:h-[600px] lg:w-[1300px] lg:h-[1080px] bg-[#181818] lg:rotate-[-60deg] min-h-[100vh]"></div>
      </div>
      <div className="absolute bottom-[-310px] right-[-200px] lg:bottom-[-582px] lg:right-[-500px]">
        <div className="lg:w-[1190px] lg:h-[1100px] bg-[#4c248b] opacity-0 lg:opacity-[30%] lg:rotate-[-23deg]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] lg:h-[3px] bg-[#4c248b]"></div>
    </div>
  );
}

export default WelcomeSection;
