import { useTranslation } from "react-i18next";
import image1 from "./assets/image1.svg";
import brazilbutton from "./assets/brazilbutton.svg";
import usabutton from "./assets/usabutton.svg";
import Tooltip from "./components/tooltip";

function WelcomeSection() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between h-screen bg-[#4c248b] text-[#181818] px-6 lg:px-20 xl:px-[200px]">
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
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-[30px] md:mt-[50px]">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
          {t("greeting")}
        </h1>
        <p className="text-xl md:text-2xl lg:text-2xl font-semibold mb-12 lg:mb-[180px]">
          {t("introduction")}
        </p>
       <Tooltip />
      </div>
      <div className="mt-12 lg:mt-0 mb-[70px] md:mb-[2px]">
        <div className="relative z-10">
          <img
            src={image1}
            alt="image1"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </div>
      </div>
      <div className="absolute bottom-[-90px] right-[-200px] md:right-[0px] lg:right-[-680px] lg:bottom-[-20px] xl:right-[-600px] 2xl:right-[-440px]">
        <div className=" w-[1200px] h-[350px] sm:h-[500px] md:h-[600px] lg:w-[1300px] lg:h-[1080px] bg-[#181818] lg:rotate-[-60deg]"></div>
      </div>
      <div className="absolute bottom-[-310px] right-[-200px] lg:bottom-[-582px] lg:right-[-500px]">
        <div className=" w-[600px] h-[600px] lg:w-[1190px] lg:h-[1100px] bg-[#4c248b] opacity-[20%] rotate-[-25deg]"></div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="absolute bottom-0 left-0 w-full h-[2px] lg:h-[3px] bg-[#4c248b]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] lg:h-[3px] bg-[#4c248b]"></div>
      <div className="absolute bottom-10 flex justify-center w-full"></div>
    </div>
  );
}

export default WelcomeSection;