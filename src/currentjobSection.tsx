import image2 from "./assets/image2.svg";

function CurrentJobSection() {
  return (
    <div className="relative flex items-center justify-between py-[110px] bg-[#232323] text-[#EBFFE7] px-[160px]">
      <div className="flex justify-center items-center w-1/2 pr-[100px]">
        <img src={image2} alt="imagem 2" className="w-[500px] h-[500px]" />
      </div>
      <div className="flex flex-col items-start w-1/2">
        <h1 className="text-4xl font-semibold mb-[100px]">Atual emprego</h1>
        <p className="text-2xl font-normal text-justify">
          Atualmente, sou desenvolvedor e web designer da Secretaria de Ciência,
          Tecnologia e Inovação de Pato Branco - Paraná. Aqui, minha missão é
          desenvolver sistemas e plataformas que otimizam os processos
          governamentais e facilitam a comunicação entre o poder público e a
          população. Estou diretamente envolvido em projetos que impactam
          positivamente a vida de cidadãos, promovendo o acesso ao conhecimento
          e à tecnologia.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EBFFE7]"></div>
      <div className="absolute top-[-123px] right-[-170px] w-[250px] h-[210px] rotate-[34deg] bg-[#EBFFE7]"></div>
    </div>
  );
}

export default CurrentJobSection;