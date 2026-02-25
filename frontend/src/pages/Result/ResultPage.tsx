import React from 'react';
import './ResultPage.css';

const ResultPage: React.FC = () => {
  return (
    <div className="result-page">
      <section className="result-hero">
        <h1>Результат: платформа для специалистов и клиентов</h1>
        <p>
          Ниже показано, как система работает для 3 уровней доступа и какие
          сервисы участвуют в работе карты, списков и обратной связи.
        </p>
      </section>

      <section className="roles-section">
        <h2>Уровни доступа</h2>
        <div className="roles-grid">
          <article className="role-card admin">
            <h3>Администратор</h3>
            <ul>
              <li>Отправляет обратную связь клиентам и специалистам.</li>
              <li>Контролирует данные пользователей платформы.</li>
              <li>Видит метрики по сервисам и активности.</li>
            </ul>
          </article>

          <article className="role-card specialist">
            <h3>Специалист</h3>
            <ul>
              <li>Ищет клиентов по карте и списком.</li>
              <li>Фильтрует заявки по бюджету, типу и локации.</li>
              <li>Получает уведомления о новых запросах.</li>
            </ul>
          </article>

          <article className="role-card client">
            <h3>Клиент</h3>
            <ul>
              <li>Ищет специалистов на карте и списком.</li>
              <li>Сравнивает рейтинг, услуги и опыт.</li>
              <li>Получает ответы и обратную связь от администратора.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="architecture-section">
        <h2>Сервисная архитектура</h2>
        <div className="service-list">
          <div className="service-item">
            <strong>Frontend (React + Redux + TypeScript + Webpack)</strong>
            <span>UI, маршрутизация, карта, списки специалистов и клиентов.</span>
          </div>
          <div className="service-item">
            <strong>Python user-service</strong>
            <span>Управление данными пользователей, специалистов и клиентов.</span>
          </div>
          <div className="service-item">
            <strong>Java auth-service и map-service</strong>
            <span>Авторизация и высоконагруженная геологика (Яндекс.Карты API).</span>
          </div>
          <div className="service-item">
            <strong>Node.js realtime-service</strong>
            <span>Онлайн-события и уведомления в реальном времени.</span>
          </div>
          <div className="service-item">
            <strong>Go feedback-service</strong>
            <span>Обратная связь администратора для пользователей.</span>
          </div>
          <div className="service-item">
            <strong>PostgreSQL + Docker Compose</strong>
            <span>Хранение данных и запуск всей системы.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultPage;
