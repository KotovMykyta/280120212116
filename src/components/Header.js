import React from "react";
import "./Header.css";
import Services from "./Services";

const Header = () => {
  return (
    <div className="header">
      <div className="header__avatar"></div>
      <div className="header__info">
        <h1 className="header__name">Вероника Ростова</h1>
        <p className="header__desc">Менеджер по продажам</p>
        <div className="header__text">
          <span>
            Подберу для вас самые лучшие предложения. Мои услуги абсолютно
            бесплатны
          </span>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default Header;
