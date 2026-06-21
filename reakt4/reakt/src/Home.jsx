import React from 'react'
import './input.css'
import Header from './Header'
import ABOUT from './img/about.webp'
import Foter from './Foter'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <section>
      <Header />
      <div className="bg-gray-500">
        <h1 className="page-title">Добро пожаловать, гость</h1>
        <h2 className="page-subtitle">
          Мы приглашаем вас посетить особняк и раскрыть все его тайны
        </h2>
        <img alt="Особняки безумия" src={ABOUT} className="hero-image" />
        <div className="bg-gray-800 text-lg">
          <p className="content-text italic">
            Грязные переулки и мрачные особняки Аркхэма стали пристанищем для древних сил, жутких секретов и неописуемых монстров.
            За стенами древних построек бормочущие безумцы и культисты взывают к Древним, а чудовища, неведомые смертным учёным, рыщут под горбатой луной.
            Сегодня ночью горстка храбрых сыщиков отважится проникнуть за закрытые двери Аркхэма и бросить вызов безумству, что скрывается за ними…
          </p>
          <p className="content-text">
            «Особняки безумия» — это кооперативная игра, действие которой происходит в мире Говарда Лавкрафта, мастера ужаса и автора мифов о Древних.
            Игрокам предстоит взять на себя роли сыщиков и окунуться в мрачный и наполненный безумием мир.
          </p>
          <p className="content-text">
            «Мифы» — необъяснимые явления, происходящие во вселенной, и часто те, кто сталкиваются с ними,
            не могут долго прийти в себя или окончательно сходят с ума.
          </p>
        </div>
        <div className="bg-gray-600 text-lg pb-6">
          <h1 className="text-slate-400 text-center uppercase text-2xl sm:text-3xl md:text-4xl mb-2 py-6 px-2">
            О нас
          </h1>
          <h3 className="text-slate-400 text-center normal-case text-sm sm:text-base indent-2 p-4 max-w-3xl mx-auto">
            Я делаю данный сайт, чтобы рассказать другим об этой настольной игре, которую многие просто забыли или не знали
          </h3>
          <div className="flex justify-center px-4">
            <button
              onClick={() => navigate('/feedback')}
              className="auth-button max-w-sm bg-yellow-600 hover:bg-yellow-500 text-stone-900 font-semibold"
            >
              Обратная связь
            </button>
          </div>
        </div>
      </div>
      <Foter />
    </section>
  )
}

export default Home
