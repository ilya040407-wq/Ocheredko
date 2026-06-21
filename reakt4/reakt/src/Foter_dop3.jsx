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
    {label: 'Дополнение игры', path: '/addition-game3'},
    {label: 'Дополнительные детективы', path: '/addition-detectives3'},
    {label: 'Дополнительные сценарии', path: '/addition-scenarios3'},
    {label: 'Дополнительные предметы', path: '/addition-items3'},
    {label: 'Дополнительные повреждения и состояние', path: '/addition-damage-and-condition3'},
    {label: 'Дополнительные бестиарий монстров', path: '/addition-bestiary3'},
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
        <header className="site-footer mx-auto bg-yellow-950">
            <img src={LOGO} alt=""  className='w-[120px] sm:w-[140px] h-auto cursor-pointer' onClick={()=>navigate('/')}/>
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