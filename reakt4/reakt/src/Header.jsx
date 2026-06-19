import React from 'react'
import './input.css'
import LOGO from './img/logo.webp'
import svg from './img/svg.webp'
import {useNavigate} from 'react-router-dom'
import Dropdown from './DropDown'
import DropdownZ from './DropDownZ'
const Header = () => {
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
        <header className="flex-nowrap mx-auto flex justify-around p-2 bg-yellow-600">
            <img src={LOGO} alt=""  className='w-[140px] h-[50px] hover:w-[150px] hover:h-[55px] cursor-pointer' onClick={()=>navigate('/')}/>
            <Dropdown title="История"  items={aboutHistory}/>
            <Dropdown title="Игра" items={aboutGame}/>
            <DropdownZ title="Дополнение" items={aboutAddition1}/>
            {
                localStorage.getItem('token')?(
                    <>
                    <button className='rounded text-green-700 hover:text-green-400 text-2xl bg-yellow-500 hover:bg-gray-700 h-[45px] w-[190px]' onClick={()=>{
                        localStorage.removeItem('token')
                        window.location.reload()
                        navigate('/')
                    }}>Выйти</button>
                    </>
                ):(
                    <>
      <div className="flex flex-nowrap ">
      <img src={svg} alt="" className='rounded  h-[45px] w-[45px] hover:w-[50px] hover:h-[50px] cursor-pointer  'onClick={()=>navigate('/login')}></img>

            </div>
                                        </>
                )
            }
        </header>
    </div>
  )
}

export default Header


//<button className="rounded text-green-700 hover:text-green-400 text-2xl bg-yellow-500 hover:bg-gray-700 h-[35px] w-[95px]" onClick={()=>navigate('/Game')}>Game</button>
//<button className="rounded text-green-700 hover:text-green-400 text-2xl bg-yellow-500 hover:bg-gray-700 h-[35px] w-[95px]" onClick={()=>navigate('/Addition')}>Addition</button>