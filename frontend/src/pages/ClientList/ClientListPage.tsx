import React, { useState } from 'react';
import './ClientListPage.css';

// Временные данные для тестирования
const mockClients = [
  {
    id: 1,
    fullName: 'Алексей Клиентов',
    contactPhone: '+7 (999) 111-22-33',
    budgetRange: '50 000 - 100 000 руб',
    address: 'Москва, ул. Ленина, 15',
    projectDescription: 'Нужно установить 4 камеры видеонаблюдения в трехкомнатной квартире. Требуется качественное оборудование с возможностью удаленного просмотра через телефон.',
    projectType: 'Квартира',
    area: '85 м²',
    timeline: 'В течение 2 недель'
  },
  {
    id: 2,
    fullName: 'Ольга Заказчикова',
    contactPhone: '+7 (999) 444-55-66',
    budgetRange: '100 000 - 200 000 руб',
    address: 'Москва, пр. Мира, 42',
    projectDescription: 'Система видеонаблюдения для частного дома с удаленным доступом. Дом двухэтажный, участок 10 соток. Нужно охватить периметр и входные группы.',
    projectType: 'Частный дом',
    area: '200 м² + участок',
    timeline: 'В течение месяца'
  },
  {
    id: 3,
    fullName: 'Иван Бизнесов',
    contactPhone: '+7 (495) 777-88-99',
    budgetRange: '200 000 - 500 000 руб',
    address: 'Москва, ул. Промышленная, 8',
    projectDescription: 'Система безопасности для офисного центра. Требуется видеонаблюдение в холле, коридорах и на парковке. Интеграция с существующей системой контроля доступа.',
    projectType: 'Офисный центр',
    area: '1500 м²',
    timeline: 'Срочно, в течение недели'
  }
];

const ClientListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState(mockClients);
  const [selectedProjectType, setSelectedProjectType] = useState('all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    const filtered = mockClients.filter(client =>
      client.fullName.toLowerCase().includes(value) ||
      client.address.toLowerCase().includes(value) ||
      client.projectDescription.toLowerCase().includes(value) ||
      client.budgetRange.toLowerCase().includes(value) ||
      client.projectType.toLowerCase().includes(value)
    );
    setFilteredClients(filtered);
  };

  const handleProjectTypeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectType = e.target.value;
    setSelectedProjectType(projectType);
    
    if (projectType === 'all') {
      setFilteredClients(mockClients);
    } else {
      const filtered = mockClients.filter(client =>
        client.projectType.toLowerCase() === projectType.toLowerCase()
      );
      setFilteredClients(filtered);
    }
  };

  // Получаем все уникальные типы проектов для фильтра
  const projectTypes = Array.from(
    new Set(mockClients.map(client => client.projectType))
  );

  return (
    <div className="client-list-page">
      <div className="page-header">
        <h1>Клиенты</h1>
        <p>Найдите клиентов для ваших услуг по установке видеонаблюдения</p>
      </div>

      <div className="filters-section">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Поиск по имени, адресу, проекту или бюджету..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="project-type-filter">
          <select
            value={selectedProjectType}
            onChange={handleProjectTypeFilter}
            className="filter-select"
          >
            <option value="all">Все типы проектов</option>
            {projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          Найдено клиентов: <strong>{filteredClients.length}</strong>
        </div>
        <div className="stat">
          Общий бюджет: <strong>
            {filteredClients.reduce((total, client) => {
              const minBudget = parseInt(client.budgetRange.split(' - ')[0].replace(/\D/g, ''));
              return total + minBudget;
            }, 0).toLocaleString()} руб
          </strong>
        </div>
      </div>

      <div className="clients-grid">
        {filteredClients.length === 0 ? (
          <div className="no-results">
            {searchTerm || selectedProjectType !== 'all' 
              ? 'Клиенты по вашему запросу не найдены' 
              : 'Клиенты не найдены'
            }
          </div>
        ) : (
          filteredClients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-header">
                <h3>{client.fullName}</h3>
                <span className="budget-badge">{client.budgetRange}</span>
              </div>
              
              <div className="client-info">
                <p className="client-phone">📞 {client.contactPhone}</p>
                <p className="project-type">🏢 Тип объекта: {client.projectType}</p>
                {client.area && (
                  <p className="project-area">📐 Площадь: {client.area}</p>
                )}
                {client.timeline && (
                  <p className="project-timeline">⏱️ Сроки: {client.timeline}</p>
                )}
              </div>

              <p className="client-address">📍 {client.address}</p>

              <div className="project-section">
                <h4>Описание проекта:</h4>
                <p className="project-description">{client.projectDescription}</p>
              </div>

              <div className="client-actions">
                <button className="contact-btn">Связаться</button>
                <button className="make-offer-btn">Предложить услуги</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClientListPage;