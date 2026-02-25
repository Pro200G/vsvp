import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SpecialistListPage from './pages/SpecialistList/SpecialistListPage';
import ClientListPage from './pages/ClientList/ClientListPage';
import MapPage from './pages/Map/MapPage';
import ResultPage from './pages/Result/ResultPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/specialists" element={<SpecialistListPage />} />
          <Route path="/clients" element={<ClientListPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
