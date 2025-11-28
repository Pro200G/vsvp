import React, { useState } from 'react';
import './MapPage.css';

// Временные данные
const mockSpecialists = [
  {
    id: 1,
    type: 'specialist' as const,
    companyName: 'ПрофВидеонаблюдение',
    description: 'Профессиональная установка систем видеонаблюдения',
    contactPhone: '+7 (495) 123-45-67',
    address: 'Москва, ул. Тверская, 1',
    position: [55.7558, 37.6173] as [number, number],
    rating: 4.8,
    services: ['монтаж камер', 'настройка ПО']
  },
  {
    id: 2,
    type: 'specialist' as const,
    companyName: 'БезопасностьГарант',
    description: 'Системы безопасности для дома и бизнеса',
    contactPhone: '+7 (495) 765-43-21',
    address: 'Москва, ул. Арбат, 25',
    position: [55.7604, 37.6252] as [number, number],
    rating: 4.5,
    services: ['видеонаблюдение', 'сигнализация']
  }
];

const mockClients = [
  {
    id: 1,
    type: 'client' as const,
    fullName: 'Алексей Клиентов',
    contactPhone: '+7 (999) 111-22-33',
    budgetRange: '50 000 - 100 000 руб',
    address: 'Москва, ул. Ленина, 15',
    projectDescription: '4 камеры в квартире',
    position: [55.7517, 37.6178] as [number, number],
    projectType: 'Квартира'
  },
  {
    id: 2,
    type: 'client' as const,
    fullName: 'Ольга Заказчикова',
    contactPhone: '+7 (999) 444-55-66',
    budgetRange: '100 000 - 200 000 руб',
    address: 'Москва, пр. Мира, 42',
    projectDescription: 'Система для частного дома',
    position: [55.7818, 37.6327] as [number, number],
    projectType: 'Частный дом'
  }
];

type MapUser = typeof mockSpecialists[0] | typeof mockClients[0];

const MapPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'specialists' | 'clients'>('all');
  const [selectedUser, setSelectedUser] = useState<MapUser | null>(null);

  const getDisplayData = (): MapUser[] => {
    switch (activeTab) {
      case 'specialists':
        return mockSpecialists;
      case 'clients':
        return mockClients;
      case 'all':
      default:
        return [...mockSpecialists, ...mockClients];
    }
  };

  const displayData = getDisplayData();

  const stats = {
    total: displayData.length,
    specialists: mockSpecialists.length,
    clients: mockClients.length,
  };

  const handleContact = (phone: string) => {
    alert(`Звонок на номер: ${phone}`);
  };

  const getUserName = (user: MapUser): string => {
    return user.type === 'specialist' ? user.companyName : user.fullName;
  };

  const getDescription = (user: MapUser): string => {
    return user.type === 'specialist' ? user.description : user.projectDescription;
  };

  return (
    <div className="map-page">
      <div className="page-header">
        <h1>Интерактивная карта</h1>
        <p>Найдите специалистов и клиентов в вашем регионе</p>
      </div>

      <div className="map-controls">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Все ({mockSpecialists.length + mockClients.length})
          </button>
          <button
            className={`tab ${activeTab === 'specialists' ? 'active' : ''}`}
            onClick={() => setActiveTab('specialists')}
          >
            Специалисты ({mockSpecialists.length})
          </button>
          <button
            className={`tab ${activeTab === 'clients' ? 'active' : ''}`}
            onClick={() => setActiveTab('clients')}
          >
            Клиенты ({mockClients.length})
          </button>
        </div>

        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-color specialist-marker"></div>
            <span>Специалисты</span>
          </div>
          <div className="legend-item">
            <div className="legend-color client-marker"></div>
            <span>Клиенты</span>
          </div>
        </div>
      </div>

      <div className="map-content">
        <div className="map-container-simple">
          <div className="map-placeholder">
            <div className="map-overlay">
              <h3>🗺️ Интерактивная карта</h3>
              <p>Карта временно заменена статическим видом</p>
              <p>Всего отображено: <strong>{displayData.length}</strong> объектов</p>
              
              <div className="coordinates-preview">
                <h4>Координаты объектов:</h4>
                {displayData.map((item, index) => (
                  <div key={item.id} className="coordinate-item">
                    <span className="coord-type">{item.type === 'specialist' ? '👨‍💼' : '👤'}</span>
                    <span className="coord-name">{getUserName(item)}</span>
                    <span className="coord-pos">[{item.position[0].toFixed(4)}, {item.position[1].toFixed(4)}]</span>
                  </div>
                ))}
              </div>

              <div className="map-features">
                <h4>Функции которые будут доступны:</h4>
                <ul>
                  <li>📍 Интерактивные маркеры на карте</li>
                  <li>🔍 Приближение и панорамирование</li>
                  <li>🎯 Клик по маркерам для информации</li>
                  <li>🗺️ Разные иконки для типов пользователей</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="map-sidebar">
          <div className="sidebar-section">
            <h3>Статистика</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{stats.total}</div>
                <div className="stat-label">Всего на карте</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats.specialists}</div>
                <div className="stat-label">Специалистов</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats.clients}</div>
                <div className="stat-label">Клиентов</div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Список {activeTab === 'all' ? 'пользователей' : activeTab}</h3>
            <div className="users-list">
              {displayData.length === 0 ? (
                <div className="no-users">Нет данных для отображения</div>
              ) : (
                displayData.map((item) => (
                  <div 
                    key={`${item.type}-${item.id}`} 
                    className={`user-item ${selectedUser?.id === item.id ? 'selected' : ''}`}
                    onClick={() => setSelectedUser(item)}
                  >
                    <div className="user-type-indicator">
                      {item.type === 'specialist' ? '👨‍💼' : '👤'}
                    </div>
                    <div className="user-info">
                      <div className="user-name">
                        {getUserName(item)}
                      </div>
                      <div className="user-details">
                        {getDescription(item)}
                      </div>
                      <div className="user-address">{item.address}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedUser && (
        <div className="selected-user-panel">
          <div className="panel-header">
            <h3>Выбранный {selectedUser.type === 'specialist' ? 'специалист' : 'клиент'}</h3>
            <button 
              className="close-btn"
              onClick={() => setSelectedUser(null)}
            >
              ×
            </button>
          </div>
          <div className="panel-content">
            <h4>{getUserName(selectedUser)}</h4>
            <p><strong>Телефон:</strong> {selectedUser.contactPhone}</p>
            <p><strong>Адрес:</strong> {selectedUser.address}</p>
            {selectedUser.type === 'specialist' ? (
              <>
                <p><strong>Рейтинг:</strong> ⭐ {selectedUser.rating}/5.0</p>
                <p><strong>Услуги:</strong> {selectedUser.services.join(', ')}</p>
              </>
            ) : (
              <>
                <p><strong>Бюджет:</strong> {selectedUser.budgetRange}</p>
                <p><strong>Тип проекта:</strong> {selectedUser.projectType}</p>
              </>
            )}
            <button 
              className="contact-btn"
              onClick={() => handleContact(selectedUser.contactPhone)}
            >
              📞 Позвонить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;