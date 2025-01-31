import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Button = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledWrapper>
      <button className="button" onClick={scrollToTop}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
        <span className="button-text">{t("button")}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4c248b;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #4c248b;
    align-items: center;
  }

  .button:hover .svgIcon {
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button-text {
    position: absolute;
    bottom: -20px;
    color: white;
    font-size: 0px;
    transition-duration: 0.3s;
  }

  .button:hover .button-text {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  }
`;

export default Button;