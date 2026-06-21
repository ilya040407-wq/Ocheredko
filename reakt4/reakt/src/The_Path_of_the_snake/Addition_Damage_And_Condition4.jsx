import React from 'react'
import './input.css'
import Header from '../Header_dop4'
import s from '../img/011.webp'
import s1 from '../img/005.webp'
import r from '../img/b1.webp'
import r1 from '../img/b2.webp'
import u from '../img/b3.webp'
import u1 from '../img/b4.webp'
import Foter from '../Foter_dop4'

const Addition_Damage_And_Condition = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется два новых состояние, по двум новым картам урона и ужаса и две новые карты безумия.</h3>
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
            <h3 className="text-slate-400 normal-case text-1x3 font-serif">Сыщик с этим состоянием не может получать ужас (если он сам не захочет) до конца своего хода.</h3>
                <div className='flex justify-center p-3'>
            <div className=''>
              <img src={s1} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-8 normal-case text-1x2 font-bold'>
                Карта состояния
              </p>
               </div>
            </div>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif">Сыщик получает 1 урон и переворачивает карту, выполняя проверку.</h3>

      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Damage_And_Condition