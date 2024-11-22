import JS from "./assets/jslogo.svg";
import TS from "./assets/tslogo.svg";
import CSS from "./assets/csslogo.svg";
import HTML from "./assets/htmllogo.svg";
import VSCODE from "./assets/vscodelogo.svg";
import REACT from "./assets/reactlogo.svg";
import FIGMA from "./assets/figmalogo.svg";
import NEXT from "./assets/nextlogo.svg";

function LanguagensSection() {
  return (
    <div className="relative flex flex-col items-center justify-center py-[110px] bg-[#232323] text-[#EBFFE7] space-y-12">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Linguagens e tecnologias
      </h1>
      <div className="flex justify-center space-x-8">
        <img src={JS} alt="JavaScript Logo" className="w-[100px] h-[100px]" />
        <img src={TS} alt="TypeScript Logo" className="w-[100px] h-[100px]" />
        <img src={CSS} alt="CSS Logo" className="w-[100px] h-[100px]" />
        <img src={HTML} alt="HTML Logo" className="w-[100px] h-[100px]" />
      </div>
      <div className="flex justify-center space-x-8">
        <img src={REACT} alt="React Logo" className="w-[100px] h-[100px]" />
        <img
          src={VSCODE}
          alt="Visual Studio Code Logo"
          className="w-[100px] h-[100px]"
        />
        <img src={FIGMA} alt="Figma Logo" className="w-[100px] h-[100px]" />
        <img src={NEXT} alt="Next.js Logo" className="w-[100px] h-[100px]" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      <div className="absolute top-[-137px] left-[-170px] w-[250px] h-[210px] rotate-[34deg] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default LanguagensSection;