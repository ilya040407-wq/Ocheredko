import React from 'react'
import './input.css'
import Header from '../Header_dop2'
import m from '../img/0m9.webp'
import m1 from '../img/0m10.webp'
import m2 from '../img/0m11.webp'
import m3 from '../img/0m12.webp'
import Foter from '../Foter_dop2'

const Addition_Bestiary = () => {
  return (
    <section><Header></Header>
        <div className='bg-gray-800 p-5 text-lg  '>
          <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении дополняется четерех новый враг.</h3>
          <div className=' flex flex-row'>
                  <div>
                    <img src={m} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                   <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - бестелесный</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Бродящий меж миров разрывают тонкие стены реальности в поисках</p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      жертвы и затягивают несчастных в свои измерения</p>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div>
                    <img src={m1} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Чернокнижники разбираются как в современной моде, так и в древнем колдостве.</p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      Показательный пример того, что бывает, когда простой смертный овладевает силами тьмы</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m2} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Вязкое и подвижное тело бесформенной твари принимает очертания в соотвествии с волей своего хозяина</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m3} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - водный</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Крепкое телосложение позваляет глубоководному-охотнику преследовать тех,</p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      кто слишком близко подобрался к царству под волнами</p>
                  </div>
                </div>
        </div>
        <Foter></Foter>
    </section>
  )
}

export default Addition_Bestiary


