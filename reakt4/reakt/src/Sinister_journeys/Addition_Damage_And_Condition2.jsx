import React from 'react'
import './input.css'
import Header from '../Header_dop2'
import s from '../img/050.webp'
import u from '../img/055.webp'
import r from '../img/059.webp'
import r2 from '../img/060.webp'
import u2 from '../img/056.webp'
import Foter from '../Foter_dop2'

const Addition_Damage_And_Condition = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется одно новое состояние, по трем новым картам урона и ужаса и три новые карты безумия.</h3>
          <div className='flex justify-center p-3'>
            <div className=''>
              <img src={u} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта урон
              </p>
               </div>
            <div className=''>
              <img src={u2} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта урон
              </p>
               </div>
              <div className=''>
              <img src={r} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта ужаса
              </p>
            </div>
              <div className=''>
              <img src={r2} alt="" className='p-4 w-[230px] h-[340px] '/>
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
            <h3 className="text-slate-400 normal-case text-1x3 font-serif">Убирается фигура с поля,она не подвержена различным эффектом и не может совершать действия пока не выберется(перевернуть эту карту и выполнить условия или пройти проверку).</h3>

      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Damage_And_Condition