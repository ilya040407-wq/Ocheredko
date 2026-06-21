import React from 'react'
import './input.css'
import Header from '../Header_dop3'
import m1 from '../img/0m2.webp'
import m2 from '../img/0m5.webp'
import m3 from '../img/0m6.webp'
import m4 from '../img/0m7.webp'
import Foter from '../Foter_dop3'

const Addition_Bestiary = () => {
  return (
    <section><Header></Header>
        <div className='bg-gray-800 p-5 text-lg'>
          <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении дополняется одни новый враг.</h3>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m1} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - Водный</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Кости, покоившиеся многие годы, теперь, треща и громыхая, скитаются по земле по воле тёмных сил.</p>
                  </div>
                </div>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m2} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - бестелесный</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Кровь, которой питается звёздный вампир, на время окрашивает его тело, и существо остаётся видимым,</p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      пока не будет готово к новой охоте.</p>
                  </div>
                </div>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m3} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Когда решающим фактором в вопросах морали оказываются деньги,</p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      обычные люди могут быть страшнее любых монстров.</p>
                  </div>
                </div>
                  <div className='flex flex-row'>
                  <div>
                    <img src={m4} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Ящероподобный облик ллойгора - психическая иллюзия, которую он напускает, пока медленно пожирает человеческий разум.</p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>
                      Но когда его когти начинают разрывать плоть, иллюзия ощущается слишком реальной.</p>
                  </div>
                </div>
        </div>
        <Foter></Foter>
    </section>
  )
}

export default Addition_Bestiary