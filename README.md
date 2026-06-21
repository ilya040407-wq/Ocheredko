# Ocheredko — Особняки безумия

Сайт о настольной игре «Особняки безумия»: React-фронтенд и Django-бэкенд.

## Структура

- `reakt4/reakt/` — React-приложение (Create React App + Tailwind CSS)
- `reakt4/project/` — Django REST API (регистрация, вход, профиль, обратная связь)

## Запуск локально

### Бэкенд

```bash
cd reakt4/project
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
python manage.py migrate
python manage.py runserver
```

### Фронтенд

```bash
cd reakt4/reakt
npm install
copy .env.example .env.local
npm start
```

## Обратная связь (SMTP)

1. Скопируйте `reakt4/project/.env.example` в `reakt4/project/.env`
2. Укажите SMTP-данные (`EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`, `FEEDBACK_RECIPIENT`)
3. Для Gmail используйте пароль приложения
4. Без SMTP-настроек письма выводятся в консоль Django

Форма обратной связи: `/feedback`

## API

| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/register/` | Регистрация |
| POST | `/login/` | Вход |
| GET | `/profile/` | Профиль (Token) |
| POST | `/feedback/` | Обратная связь |
