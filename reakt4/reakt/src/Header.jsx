import React from 'react'
import './input.css'
import LOGO from './img/logo.webp'
import svg from './img/svg.webp'
import { useNavigate } from 'react-router-dom'
import Dropdown from './DropDown'
import DropdownZ from './DropDownZ'

const Header = () => {
  const navigate = useNavigate()

  const aboutHistory = [
    { label: 'Создатели игры', path: '/creators' },
    { label: 'Первая редакция', path: '/first-edition' },
    { label: 'Вторая редакция', path: '/second-edition' },
  ]

  const aboutGame = [
    { label: 'Правила игры', path: '/rules-game' },
    { label: 'Приложение', path: '/application' },
    { label: 'Детективы', path: '/detectives' },
    { label: 'Сценарии', path: '/scenarios' },
    { label: 'Предметы', path: '/items' },
    { label: 'Повреждения и состояние', path: '/damage-and-condition' },
    { label: 'Бестиарий монстров', path: '/bestiary' },
    { label: 'Головоломки', path: '/puzzles' },
  ]

  const aboutAddition1 = [
    { label: 'Святилище сумерек', path: '/addition-game' },
    { label: 'За порогом', path: '/addition-game1' },
    { label: 'Зловещие путешествия', path: '/addition-game2' },
    { label: 'Улицы Аркхэма', path: '/addition-game3' },
    { label: 'Путь змеи', path: '/addition-game4' },
  ]

  const isLoggedIn = Boolean(localStorage.getItem('token'))

  return (
    <div>
      <header className="site-header bg-yellow-600">
        <img
          src={LOGO}
          alt="Логотип"
          className="w-[120px] sm:w-[140px] h-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        <Dropdown title="История" items={aboutHistory} />
        <Dropdown title="Игра" items={aboutGame} />
        <DropdownZ title="Дополнение" items={aboutAddition1} />
        <button
          className="rounded text-green-700 hover:text-green-400 text-base sm:text-xl bg-yellow-500 hover:bg-gray-700 h-[40px] sm:h-[45px] px-3 sm:px-4 min-w-[120px]"
          onClick={() => navigate('/feedback')}
        >
          Связь
        </button>
        {isLoggedIn ? (
          <button
            className="rounded text-green-700 hover:text-green-400 text-base sm:text-2xl bg-yellow-500 hover:bg-gray-700 h-[40px] sm:h-[45px] px-3 sm:w-[190px]"
            onClick={() => {
              localStorage.removeItem('token')
              navigate('/')
              window.location.reload()
            }}
          >
            Выйти
          </button>
        ) : (
          <img
            src={svg}
            alt="Войти"
            className="rounded h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] cursor-pointer"
            onClick={() => navigate('/login')}
          />
        )}
      </header>
    </div>
  )
}

export default Header
