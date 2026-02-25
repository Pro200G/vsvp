import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Платформа для специалистов по видеонаблюдению</h1>
        <p>Найдите идеального специалиста или новых клиентов для ваших услуг</p>

        <div className="quick-actions">
          <Link to="/specialists" className="action-btn primary">
            👨‍💼 Найти специалистов
          </Link>
          <Link to="/clients" className="action-btn secondary">
            👥 Найти клиентов
          </Link>
          <Link to="/map" className="action-btn tertiary">
            🗺️ Открыть карту
          </Link>
          <Link to="/result" className="action-btn tertiary">
            ✅ Посмотреть результат
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Возможности платформы</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👨‍💼</div>
            <h3>Для специалистов</h3>
            <ul>
              <li>Находите клиентов в вашем регионе</li>
              <li>Показывайте свои услуги и опыт</li>
              <li>Получайте отзывы от клиентов</li>
              <li>Работайте с интерактивной картой</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Для клиентов</h3>
            <ul>
              <li>Находите проверенных специалистов</li>
              <li>Сравнивайте цены и услуги</li>
              <li>Читайте отзывы и рейтинги</li>
              <li>Выбирайте на интерактивной карте</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Интерактивная карта</h3>
            <ul>
              <li>Просматривайте специалистов и клиентов на карте</li>
              <li>Поиск по местоположению</li>
              <li>Фильтрация по услугам и рейтингу</li>
              <li>Прямой контакт из карты</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>Платформа в цифрах</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Специалистов</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Клиентов</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Выполненных проектов</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Средний рейтинг</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
