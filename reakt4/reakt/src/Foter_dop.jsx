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
    {label: 'Дополнение игры', path: '/addition-game'},
    {label: 'Дополнительные детективы', path: '/addition-detectives'},
    {label: 'Дополнительные сценарии', path: '/addition-scenarios'},
    {label: 'Дополнительные предметы', path: '/addition-items'},
    {label: 'Дополнительные повреждения и состояние', path: '/addition-damage-and-condition'},
    {label: 'Дополнительные бестиарий монстров', path: '/addition-bestiary'},
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
      <div className=''>
        <header className="site-footer mx-auto bg-violet-950">
            <img src={LOGO} alt=""  className='w-[120px] sm:w-[140px] h-auto cursor-pointer' onClick={()=>navigate('/')}/>
            <DropDownFoter title="История" items={aboutHistory}/>
            <DropDownFoter title="Изменение игры" items={aboutGame}/>
            <DropDownFoterZ title="Дополнение" items={aboutAddition1}/>


        </header>
    </div>
    </div>
  )
}

export default Foter