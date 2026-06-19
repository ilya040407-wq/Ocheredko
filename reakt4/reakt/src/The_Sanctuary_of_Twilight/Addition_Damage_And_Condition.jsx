import React from 'react'
import './input.css'
import Header from '../Header_dop'
import s from '../img/102.webp'
import r from '../img/101.webp'
import u from '../img/100.webp'
import Foter from '../Foter_dop'

const Addition_Damage_And_Condition = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется одно новое состояние, по одному новому урону и ужасу и две новые карты безумия.</h3>
          <div className='flex justify-center p-3'>
            <div className=''>
              <img src={u} alt="" className='p-4 w-[230px] h-[340px] '/>
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
            </div>
                <div className='flex justify-center p-3'>
            <div className=''>
              <img src={s} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-8 normal-case text-1x2 font-bold'>
                Карта состояния
              </p>
               </div>
            </div>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif">После броска или замены лупы на успех, нужно убрать один успех.</h3>

      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Damage_And_Condition