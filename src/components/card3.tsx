import { useState } from "react";
import styled from "styled-components";
import { t } from "i18next";

const Card3 = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const visitUrl = "https://www.fabricadepremiosfugini.com.br/campanha-fugini";

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledWrapper>
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="card__content">
          <p className="card__title">{t("card3title")}</p>
          <p className="card__description">{t("card3description")}</p>
          <a
            className="card__button"
            href={visitUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {t("visit")}
          </a>
        </div>
        <div className="card__back"></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 320px;
    border-radius: 10px;
    perspective: 1000px;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    overflow: hidden;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card__content,
  .card__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 900ms ease-in-out;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .card__content {
    background: #4c248b;
    transform: rotateY(0deg);
    overflow: hidden;
  }

  .card__back {
    background: #111 url("./assets/fugini.jpg") center/contain no-repeat;
    transform: rotateY(180deg);
    border-radius: 10px;
  }

  .card.flipped .card__content {
    transform: rotateY(180deg);
  }

  .card.flipped .card__back {
    transform: rotateY(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
  }

  .card__description {
    margin: 6px 0 0;
    font-size: 14px;
    color: #fff;
    line-height: 1.3;
    text-align: justify;
    flex: 1;
    overflow: auto;
  }

  .card__button {
    margin-top: 12px;
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    background: #ffffff;
    color: #4c248b;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    border: 2px solid rgba(255, 255, 255, 0.25);
    transition: transform 160ms ease, opacity 160ms ease, background 160ms ease,
      color 160ms ease, box-shadow 160ms ease;
  }

  .card__button:hover {
    background: rgba(255, 255, 255, 0.92);
    transform: translateY(-1px);
    opacity: 1;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
  }

  .card__button:active {
    transform: translateY(0px);
    box-shadow: none;
  }

  .card__button:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    .card {
      height: 360px;
    }
  }
`;

export default Card3;