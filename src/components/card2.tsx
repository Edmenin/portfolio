import styled from "styled-components";
import { t } from "i18next";

const Card2 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          <p className="card__title">{t("card2title")}</p>
          <p className="card__description">{t("card2description")}</p>
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
    height: 200px;
    border-radius: 10px;
    perspective: 1000px;
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
    justify-content: center;
    align-items: center;
  }

  .card__content {
    background: #4c248b;
    transform: rotateY(0deg);
  }

  .card__back {
    background: url("./assets/mundomel.svg") center/cover no-repeat;
    transform: rotateY(180deg);
    border-radius: 10px;
  }

  .card:hover .card__content {
    transform: rotateY(180deg);
  }

  .card:hover .card__back {
    transform: rotateY(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
  }

  .card__description {
    margin: 6px 0 0;
    font-size: 14px;
    color: #fff;
    line-height: 1.3;
  }
`;

export default Card2;