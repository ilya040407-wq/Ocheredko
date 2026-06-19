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
    {label: 'Дополнение игры', path: '/addition-game2'},
    {label: 'Дополнительные детективы', path: '/addition-detectives2'},
    {label: 'Дополнительные сценарии', path: '/addition-scenarios2'},
    {label: 'Дополнительные предметы', path: '/addition-items2'},
    {label: 'Дополнительные повреждения и состояние', path: '/addition-damage-and-condition2'},
    {label: 'Дополнительные бестиарий монстров', path: '/addition-bestiary2'},
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
        <header className="flex-nowrap mx-auto flex justify-around p-2 bg-emerald-700">
            <img src={LOGO} alt=""  className='w-[140px] h-[50px] hover:w-[150px] hover:h-[55px] cursor-pointer' onClick={()=>navigate('/')}/>
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