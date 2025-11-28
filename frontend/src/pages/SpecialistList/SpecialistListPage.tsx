import React, { useState } from 'react';
import './SpecialistListPage.css';

// Временные данные для тестирования
const mockSpecialists = [
  {
    id: 1,
    companyName: 'ПрофВидеонаблюдение',
    description: 'Профессиональная установка систем видеонаблюдения любой сложности. Работаем с 2018 года.',
    experienceYears: 5,
    rating: 4.8,
    servicesOffered: ['монтаж камер', 'настройка ПО', 'обслуживание', 'консультации'],
    licenseNumber: 'ЛИЦ-12345',
    isVerified: true,
    contactPhone: '+7 (495) 123-45-67',
    address: 'Москва, ул. Тверская, 1',
    email: 'pro@video.ru'
  },
  {
    id: 2,
    companyName: 'БезопасностьГарант',
    description: 'Системы безопасности для дома и бизнеса. Качественные решения по доступным ценам.',
    experienceYears: 3,
    rating: 4.5,
    servicesOffered: ['видеонаблюдение', 'сигнализация', 'СКУД'],
    licenseNumber: 'ЛИЦ-67890',
    isVerified: true,
    contactPhone: '+7 (495) 765-43-21',
    address: 'Москва, ул. Арбат, 25',
    email: 'safe@garant.ru'
  },
  {
    id: 3,
    companyName: 'ВидеоМастер',
    description: 'Индивидуальный подход к каждому клиенту. Быстрый и качественный монтаж.',
    experienceYears: 2,
    rating: 4.2,
    servicesOffered: ['установка камер', 'ремонт оборудования'],
    licenseNumber: 'ЛИЦ-54321',
    isVerified: false,
    contactPhone: '+7 (925) 111-22-33',
    address: 'Москва, пр. Мира, 15',
    email: 'master@video.ru'
  }
];

const SpecialistListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSpecialists, setFilteredSpecialists] = useState(mockSpecialists);
  const [selectedService, setSelectedService] = useState('all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    const filtered = mockSpecialists.filter(specialist =>
      specialist.companyName.toLowerCase().includes(value) ||
      specialist.description.toLowerCase().includes(value) ||
      specialist.servicesOffered.some(service => 
        service.toLowerCase().includes(value)
      ) ||
      specialist.address.toLowerCase().includes(value)
    );
    setFilteredSpecialists(filtered);
  };

  const handleServiceFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const service = e.target.value;
    setSelectedService(service);
    
    if (service === 'all') {
      setFilteredSpecialists(mockSpecialists);
    } else {
      const filtered = mockSpecialists.filter(specialist =>
        specialist.servicesOffered.some(s => 
          s.toLowerCase().includes(service.toLowerCase())
        )
      );
      setFilteredSpecialists(filtered);
    }
  };

  // Получаем все уникальные услуги для фильтра
  const allServices = Array.from(
    new Set(mockSpecialists.flatMap(s => s.servicesOffered))
  );

  return (
    <div className="specialist-list-page">
      <div className="page-header">
        <h1>Специалисты по видеонаблюдению</h1>
        <p>Найдите подходящего специалиста для вашего проекта</p>
      </div>

      <div className="filters-section">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Поиск по названию, описанию, услугам или адресу..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="service-filter">
          <select
            value={selectedService}
            onChange={handleServiceFilter}
            className="filter-select"
          >
            <option value="all">Все услуги</option>
            {allServices.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          Найдено специалистов: <strong>{filteredSpecialists.length}</strong>
        </div>
        <div className="stat">
          Проверенных: <strong>{filteredSpecialists.filter(s => s.isVerified).length}</strong>
        </div>
      </div>

      <div className="specialists-grid">
        {filteredSpecialists.length === 0 ? (
          <div className="no-results">
            {searchTerm || selectedService !== 'all' 
              ? 'Специалисты по вашему запросу не найдены' 
              : 'Специалисты не найдены'
            }
          </div>
        ) : (
          filteredSpecialists.map((specialist) => (
            <div key={specialist.id} className="specialist-card">
              <div className="specialist-header">
                <h3>{specialist.companyName}</h3>
                <div className="specialist-badges">
                  {specialist.isVerified && <span className="verified-badge">✓ Проверен</span>}
                  <span className="rating-badge">⭐ {specialist.rating}</span>
                </div>
              </div>
              
              <div className="specialist-info">
                <p className="specialist-experience">
                  🎯 Опыт работы: {specialist.experienceYears} лет
                </p>
                {specialist.licenseNumber && (
                  <p className="specialist-license">
                    📄 Лицензия: {specialist.licenseNumber}
                  </p>
                )}
              </div>

              <p className="specialist-description">{specialist.description}</p>

              <div className="services-section">
                <h4>Предлагаемые услуги:</h4>
                <div className="services-tags">
                  {specialist.servicesOffered.map((service, index) => (
                    <span key={index} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>

              <div className="contact-section">
                <p className="specialist-phone">📞 {specialist.contactPhone}</p>
                <p className="specialist-email">📧 {specialist.email}</p>
                <p className="specialist-address">📍 {specialist.address}</p>
              </div>

              <div className="specialist-actions">
                <button className="contact-btn">Связаться</button>
                <button className="view-profile-btn">Подробнее</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SpecialistListPage;