import React from 'react'
import './input.css'
import LOGO from './img/logo.webp'
import {useNavigate} from 'react-router-dom'
import DropDownFoter from './DropDown_Foter'
import DropDownFoterZ from './DropDown_FoterZ'
const Foter = () => {
  const navigate = useNavigate()

  const aboutHistory = [
    {label: 'Создатели игры', path: '/creators'},
    {label: 'Первая редакция', path: '/first-edition'},
    {label: 'Вторая редакция', path: '/second-edition'},
  ]

  const aboutGame = [
    {label: 'Правила игры', path: '/rules-game'},
    {label: 'Приложение', path: '/application'},
    {label: 'Детективы', path: '/detectives'},
    {label: 'Сценарии', path: '/scenarios'},
    {label: 'Предметы', path: '/items'},
    {label: 'Повреждения и состояние', path: '/damage-and-condition'},
    {label: 'Бестиарий монстров', path: '/bestiary'},
    {label: 'Головоломки', path: '/puzzles'},
  ]
  const aboutAddition1 = [
    {label: 'Святилише сумерек', path: '/addition-game'},
    {label: 'За порогом', path: '/addition-game1'},
    {label: 'Зловешие путешествия', path: '/addition-game2'},
    {label: 'Улицы аркхэма', path: '/addition-game3'},
    {label: 'Путь змеи', path: '/addition-game4'},
  ]
  return (
    <div>
      <div>
        <header className="flex-nowrap mx-auto flex justify-around p-2 bg-blue-900">
            <img src={LOGO} alt=""  className='w-[140px] h-[50px] hover:w-[150px] hover:h-[55px] cursor-pointer' onClick={()=>navigate('/')}/>
            <DropDownFoter title="История" items={aboutHistory}/>
            <DropDownFoter title="Игра" items={aboutGame}/>
            <DropDownFoterZ title="Дополнение" items={aboutAddition1}/>

        </header>
    </div>
    </div>
  )
}

export default Foter