import React from 'react'
import './input.css'
import Header from '../Header_dop1'
import m1 from '../img/0m8.webp'
import Foter from '../Foter_dop1'

const Addition_Bestiary = () => {
  return (
    <div><Header></Header>
        <div className='bg-gray-800 p-5 text-lg'>
          <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении дополняется одни новый враг.</h3>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m1} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Теперь тело этой женщины принадлежит высшим силам, и ее воля стала такой же чуждой </p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      и пугающей, как и ее внешность</p>
                  </div>
                </div>
        </div>
        <Foter></Foter>
    </div>
  )
}

export default Addition_Bestiary