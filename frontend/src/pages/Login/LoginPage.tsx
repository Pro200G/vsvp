import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Имитация API вызова
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Простая валидация
      if (!email || !password) {
        setError('Пожалуйста, заполните все поля');
        return;
      }

      console.log('Login attempt:', { email, password, role });
      
      // Успешный вход - переходим на главную
      navigate('/');
    } catch (err) {
      setError('Ошибка при входе в систему');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Вход в систему</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Введите ваш email"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Введите ваш пароль"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="role">Роль:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={isLoading}
            >
              <option value="client">Клиент</option>
              <option value="specialist">Специалист</option>
              <option value="admin">Администратор</option>
            </select>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>
        
        <div className="demo-accounts">
          <h3>Тестовые аккаунты (для демонстрации):</h3>
          <div className="demo-account">
            <strong>Клиент:</strong> client@example.com / любой пароль
          </div>
          <div className="demo-account">
            <strong>Специалист:</strong> specialist@example.com / любой пароль
          </div>
          <div className="demo-account">
            <strong>Админ:</strong> admin@example.com / любой пароль
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;