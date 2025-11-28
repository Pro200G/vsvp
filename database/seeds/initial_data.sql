-- Тестовые пользователи
INSERT INTO users (email, hashed_password, full_name, role, is_active) VALUES
('admin@surveillance.com', '$2b$12$hashed_password_here', 'Администратор Системы', 'admin', true),
('specialist1@example.com', '$2b$12$hashed_password_here', 'Иван Петров', 'specialist', true),
('specialist2@example.com', '$2b$12$hashed_password_here', 'Мария Сидорова', 'specialist', true),
('client1@example.com', '$2b$12$hashed_password_here', 'Алексей Клиентов', 'client', true),
('client2@example.com', '$2b$12$hashed_password_here', 'Ольга Заказчикова', 'client', true);

-- Тестовые специалисты
INSERT INTO specialists (user_id, company_name, description, experience_years, services_offered, latitude, longitude, address) VALUES
(2, 'ПрофВидеонаблюдение', 'Профессиональная установка систем видеонаблюдения любой сложности', 5, '{"монтаж камер", "настройка ПО", "обслуживание"}', 55.7558, 37.6173, 'Москва, ул. Тверская, 1'),
(3, 'БезопасностьГарант', 'Системы безопасности для дома и бизнеса', 3, '{"видеонаблюдение", "сигнализация", "консультации"}', 55.7604, 37.6252, 'Москва, ул. Арбат, 25');

-- Тестовые клиенты
INSERT INTO clients (user_id, address, latitude, longitude, budget_range, project_description) VALUES
(4, 'Москва, ул. Ленина, 15', 55.7517, 37.6178, '50 000 - 100 000 руб', 'Нужно установить 4 камеры видеонаблюдения в квартире'),
(5, 'Москва, пр. Мира, 42', 55.7818, 37.6327, '100 000 - 200 000 руб', 'Система видеонаблюдения для частного дома с удаленным доступом');