import React from 'react'
import './input.css'
import Header from '../Header_dop3'
import p from '../img/a3.webp'
import py1 from '../img/a2.webp'
import py2 from '../img/a7.webp'
import po from '../img/a8.webp'
import o from '../img/a4.webp'
import z from '../img/a5.webp'
import z2 from '../img/a6.webp'
import z3 from '../img/a9.webp'
import Foter from '../Foter_dop3'

const Addition_Items = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется много обычных предметов.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={p} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта снаряжение
              </p>
               </div>
              </div>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется несколько обычных предметов которые позваляют улутшать детектива.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={py1} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта снаряжение улутшение
              </p>
               </div>
            <div className=''>
              <img src={py2} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта снаряжение улутшение 
              </p>
               </div>
              </div>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется несколько новых видов оружие.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={po} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта оружие
              </p>
               </div>
              </div>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется несколько новых уникальных веший.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={o} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта уникальные веши
              </p>
               </div>
              </div>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется три новых заклинание.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={z} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта заклинания
              </p>
               </div>
            <div className=''>
              <img src={z3} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта заклинания
              </p>
               </div>
              <div className=''>
              <img src={z2} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Карта заклинания
              </p>
               </div>
              </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Items