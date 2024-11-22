

function LanguagensSection() {
  return (
    <div className="relative flex flex-col items-center justify-center py-[110px] bg-[#232323] text-[#EBFFE7] space-y-12">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Linguagens e tecnologias
      </h1>
      <div className="flex justify-center space-x-8">
        <img src="src/assets/images/jslogo.svg" alt="JavaScript Logo" className="w-[100px] h-[100px]" />
        <img src="src/assets/images/tslogo.svg" alt="TypeScript Logo" className="w-[100px] h-[100px]" />
        <img src="src/assets/images/csslogo.svg" alt="CSS Logo" className="w-[100px] h-[100px]" />
        <img src="src/assets/images/htmllogo.svg" alt="HTML Logo" className="w-[100px] h-[100px]" />
      </div>
      <div className="flex justify-center space-x-8">
        <img src="src/assets/images/reactlogo.svg" alt="React Logo" className="w-[100px] h-[100px]" />
        <img src="src/assets/images/vscodelogo.svg" alt="VS Code Logo" className="w-[100px] h-[100px]" />
        <img src="src/assets/images/figmalogo.svg" alt="Figma Logo" className="w-[100px] h-[100px]" />
        <img src="src/assets/images/nextlogo.svg" alt="Next.js Logo" className="w-[100px] h-[100px]" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      <div className="absolute top-[-137px] left-[-170px] w-[250px] h-[210px] rotate-[34deg] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default LanguagensSection;