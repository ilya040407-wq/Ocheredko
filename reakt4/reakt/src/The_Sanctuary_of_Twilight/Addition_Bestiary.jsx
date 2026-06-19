import React from 'react'
import './input.css'
import Header from '../Header_dop'
import m1 from '../img/110.webp'
import Foter from '../Foter_dop'

const Addition_Bestiary = () => {
  return (
    <section><Header></Header>
        <div className='bg-gray-800 p-5 text-lg'>
          <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении дополняется одни новый враг.</h3>
                  <div className='flex justify-center'>
                  <div>
                    <img src={m1} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - бестелесный</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Злые духи не могут успокоеться и обречены бродить по миру смертных.Пвобытная ярость и боль</p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      превращают их в жестоких хищников и заставляют сеять панику среди жывых</p>
                  </div>
                </div>
        </div>
        <Foter></Foter>
    </section>
  )
}

export default Addition_Bestiary