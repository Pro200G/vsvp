import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">Video Surveillance Platform</Link>
          <nav className="nav">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Главная
            </Link>
            <Link to="/specialists" className={`nav-link ${location.pathname === '/specialists' ? 'active' : ''}`}>
              Специалисты
            </Link>
            <Link to="/clients" className={`nav-link ${location.pathname === '/clients' ? 'active' : ''}`}>
              Клиенты
            </Link>
            <Link to="/map" className={`nav-link ${location.pathname === '/map' ? 'active' : ''}`}>
              Карта
            </Link>
            {!isLoginPage && (
              <Link to="/login" className="login-link">
                Войти
              </Link>
            )}
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Video Surveillance Platform. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;