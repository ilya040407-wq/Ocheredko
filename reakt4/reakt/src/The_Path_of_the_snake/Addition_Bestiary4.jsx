import React from 'react'
import './input.css'
import Header from '../Header_dop4'
import m1 from '../img/0m1.webp'
import m2 from '../img/0m3.webp'
import m3 from '../img/0m4.webp'
import m4 from '../img/0m13.webp'
import Foter from '../Foter_dop4'

const Addition_Bestiary = () => {
  return (
    <section><Header></Header>
        <div className='bg-gray-800 p-5 text-lg'>
          <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении дополняется одни новый враг.</h3>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m1} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Змеиный народ не забыл о былом величии своей цивилизации и готов вернуть потерянное наследие любой ценой.</p>
                  </div>
                </div>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m2} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - летающие</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Пёстрый пернатый змей с одинаковой лёгкостью настигает свою жертву как среди деревьев, </p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      так и у самой земли.</p>
                  </div>
                </div>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m3} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Огромные размеры древнего василиска - наименьшая из проблем его жертвы. </p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      Этот змей на удивление умён, а его яд настолько опасен, что почти всегда приводит к смерти.</p>
                  </div>
                </div>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m4} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - неудержимый (эта способность позволяет при разрушении баррикады, менять все выпавшие лупы на успех)</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Таясь среди полуразрушенных стен, стражи храма не прекращают вести свой вечный дозор.</p>
                  </div>
                </div>
        </div>
        <Foter></Foter>
    </section>
  )
}

export default Addition_Bestiary