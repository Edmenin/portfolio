import { useState } from "react";
import styled from "styled-components";
import { t } from "i18next";

const Card6 = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
          <p className="card__title">{t("card6title")}</p>
          <p className="card__description">{t("card6description")}</p>
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
    transform: scale(1.05);
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
    background: #111 url("./assets/agro.jpg") center/contain no-repeat;
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

  @media (max-width: 640px) {
    .card {
      height: 360px;
    }
  }
`;

export default Card6;
