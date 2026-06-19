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
    {label: 'Дополнение игры', path: '/addition-game4'},
    {label: 'Дополнительные детективы', path: '/addition-detectives4'},
    {label: 'Дополнительные сценарии', path: '/addition-scenarios4'},
    {label: 'Дополнительные предметы', path: '/addition-items4'},
    {label: 'Дополнительные повреждения и состояние', path: '/addition-damage-and-condition4'},
    {label: 'Дополнительные бестиарий монстров', path: '/addition-bestiary4'},
  ]
  const aboutAddition = [
    {label: 'Святилише сумерек', path: '/addition-game'},
    {label: 'За порогом', path: '/addition-game1'},
    {label: 'Зловешие путешествия', path: '/addition-game2'},
    {label: 'Улицы аркхэма', path: '/addition-game3'},
    {label: 'Путь змеи', path: '/addition-game4'},
  ]
  return (
    <div>
      <div>
        <header className="flex-nowrap mx-auto flex justify-around p-2 bg-green-800">
            <img src={LOGO} alt=""  className='w-[140px] h-[50px] hover:w-[150px] hover:h-[55px] cursor-pointer' onClick={()=>navigate('/')}/>
            <DropDownFoter title="История" items={aboutHistory}/>
            <DropDownFoter title="Изменение игры" items={aboutGame}/>
            <DropDownFoterZ title="Дополнение" items={aboutAddition}/>
            <button className="rounded text-black text-2xl bg-red-400 hover:bg-red-200 h-[45px] w-[138px]" onClick={()=>navigate('/')}>Назат</button>

        </header>
    </div>
    </div>
  )
}

export default Foter