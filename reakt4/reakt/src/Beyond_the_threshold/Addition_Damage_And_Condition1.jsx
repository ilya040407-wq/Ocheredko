import React from 'react'
import './input.css'
import Header from '../Header_dop1'
import s from '../img/044.webp'
import r from '../img/031.webp'
import r1 from '../img/033.webp'
import u from '../img/030.webp'
import u1 from '../img/034.webp'
import Foter from '../Foter_dop1'

const Addition_Damage_And_Condition = () => {
  return (
    <div><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется одно новое состояние, по двум новым карт урона и ужаса и четыре новые карты безумия.</h3>
          <div className='flex justify-center p-3'>
            <div className=''>
              <img src={u} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта урон
              </p>
               </div>
            <div className=''>
              <img src={u1} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта урон
              </p>
               </div>
            </div>
                         <div className='flex justify-center p-3'>
              <div className=''>
              <img src={r} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта ужаса
              </p>
            </div>
              <div className=''>
              <img src={r1} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта ужаса
              </p>
            </div>
            </div>
                <div className='flex justify-center p-3'>
            <div className=''>
              <img src={s} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-8 normal-case text-1x2 font-bold'>
                Карта состояния
              </p>
               </div>
            </div>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif">Нужно перевернуть карту и выполнить условия.</h3>

      </div>
      <Foter></Foter>
    </div>
  )
}

export default Addition_Damage_And_Condition