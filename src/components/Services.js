import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services__header">
        <span>Услуг</span>
      </div>
      <div className="services__list">
        <ul>
          <li>
            <div style={{ width: "73%", background: "#B1E19B" }}>
              <span className="services__title">Ручное бронирование</span>
            </div>
            <span className="services__count">11</span>
          </li>
          <li>
            <div style={{ width: "35%", background: "#ACE2F8" }}>
              <span className="services__title">Пакетные туры</span>
            </div>
            <span className="services__count">3</span>
          </li>
          <li>
            <div style={{ width: "7%", background: "#ACE2F8" }}>
              <span className="services__title">Отели</span>
            </div>
            <span className="services__count">1</span>
          </li>
        </ul>
      </div>
      <div className="services__total">
          <span>Всего</span>
          <span>15</span>
      </div>
    </div>
  );
};

export default Services;
