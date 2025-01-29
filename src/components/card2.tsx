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
        <img
          className="card__image"
          src="/src/assets/mundomel.svg"
          alt="Mundo Mel"
        />
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
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: linear-gradient(120deg, #6a0dad, #4c248b);
    opacity: 1;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2) rotate(45deg);
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
  }

  .card:hover .card__image {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg);
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