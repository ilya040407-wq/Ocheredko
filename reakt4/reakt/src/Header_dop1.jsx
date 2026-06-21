import React from 'react'
import './input.css'
import LOGO from './img/logo.webp'
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
    {label: 'Дополнение игры', path: '/addition-game1'},
    {label: 'Дополнительные детективы', path: '/addition-detectives1'},
    {label: 'Дополнительные сценарии', path: '/addition-scenarios1'},
    {label: 'Дополнительные предметы', path: '/addition-items1'},
    {label: 'Дополнительные повреждения и состояние', path: '/addition-damage-and-condition1'},
    {label: 'Дополнительные бестиарий монстров', path: '/addition-bestiary1'},
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
        <header className="site-header mx-auto bg-blue-600">
            <img src={LOGO} alt=""  className='w-[120px] sm:w-[140px] h-auto cursor-pointer' onClick={()=>navigate('/')}/>
             <Dropdown title="История" items={aboutHistory}/>
            <Dropdown title="Изменение игры" items={aboutGame}/>
            <DropdownZ title="Дополнение" items={aboutAddition}/>
            {
                localStorage.getItem('token')?(
                    <>
                    <button className='rounded text-black text-2xl bg-red-400 hover:bg-red-200 h-[45px] w-[138px]' onClick={()=>{
                        localStorage.removeItem('token')
                        window.location.reload()
                        navigate('/')
                    }}>Выйти</button>
                    </>
                ):(
                    <>
 <div className="flex flex-nowrap ">
<button className='rounded text-black  bg-red-400 hover:bg-red-200 w-auto h-[55px]   md:w-[190px] md:h-[45px]  md:text-2xl text-xl  'onClick={()=>navigate('/')}>Выйти</button>

            </div>
                                        </>
                )
            }
            
        </header>
    </div>
  )
}

export default Header

//<button className="rounded text-green-700 hover:text-green-400 text-2xl bg-yellow-500 hover:bg-gray-700 h-[35px] w-[95px]" onClick={()=>navigate('/History')}>History</button>
//<button className="rounded text-green-700 hover:text-green-400 text-2xl bg-yellow-500 hover:bg-gray-700 h-[35px] w-[95px]" onClick={()=>navigate('/Game')}>Game</button>
//<button className="rounded text-green-700 hover:text-green-400 text-2xl bg-yellow-500 hover:bg-gray-700 h-[35px] w-[95px]" onClick={()=>navigate('/Addition')}>Addition</button>