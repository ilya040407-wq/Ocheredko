import React from 'react'
import './input.css'
import Header from '../Header_dop1'
import p from '../img/045.webp'
import po from '../img/043.webp'
import o from '../img/039.webp'
import z from '../img/040.webp'
import z2 from '../img/041.webp'
import Foter from '../Foter_dop1'

const Addition_Items = () => {
  return (
    <div><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>

      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется несколько новых видов оружие.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={po} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Карта оружие
              </p>
               </div>
            <div className=''>
              <img src={p} alt="" className='p-4 w-[230px] h-[340px] '/>
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
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется два новых заклинание.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={z} alt="" className='p-4 w-[230px] h-[340px] '/>
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
    </div>
  )
}

export default Addition_Items