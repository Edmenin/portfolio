import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="py-4 bg-[#181818] text-[#ffffff] hidden lg:block">
        <div className="flex items-center flex-row space-x-8 justify-center">
          <Link
            to="aboutMe"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 5}
            className="text-md cursor-pointer relative group"
          >
            <span className="text-[#ffffff] group-hover:text-[#4c248b]">
              {t("aboutMe")}
            </span>
            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-[#ffffff] transition-all duration-300 group-hover:w-full group-hover:bg-[#4c248b]"></span>
          </Link>
          <Link
            to="languagesAndTechnologies"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 5}
            className="text-md cursor-pointer relative group"
          >
            <span className="text-[#ffffff] group-hover:text-[#4c248b]">
              {t("languagesAndTechnologies")}
            </span>
            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-[#ffffff] transition-all duration-300 group-hover:w-full group-hover:bg-[#4c248b]"></span>
          </Link>
          <Link
            to="currentJob"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 6}
            className="text-md cursor-pointer relative group"
          >
            <span className="text-[#ffffff] group-hover:text-[#4c248b]">
              {t("currentJob")}
            </span>
            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-[#ffffff] transition-all duration-300 group-hover:w-full group-hover:bg-[#4c248b]"></span>
          </Link>
          <Link
            to="studies"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 6}
            className="text-md cursor-pointer relative group"
          >
            <span className="text-[#ffffff] group-hover:text-[#4c248b]">
              {t("studies")}
            </span>
            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-[#ffffff] transition-all duration-300 group-hover:w-full group-hover:bg-[#4c248b]"></span>
          </Link>
          <Link
            to="myProjects"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 18}
            className="text-md cursor-pointer relative group"
          >
            <span className="text-[#ffffff] group-hover:text-[#4c248b]">
              {t("myProjects")}
            </span>
            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-[#ffffff] transition-all duration-300 group-hover:w-full group-hover:bg-[#4c248b]"></span>
          </Link>
        </div>
      </div>
      <div className="h-[3px] bg-[#4c248b]"></div>
    </div>
  );
}

export default Navbar;