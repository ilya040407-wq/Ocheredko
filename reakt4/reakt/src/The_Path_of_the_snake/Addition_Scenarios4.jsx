import React from 'react'
import './input.css'
import Header from '../Header_dop4'
import t1 from '../img/4h.webp'
import t2 from '../img/5h.webp'
import t3 from '../img/8h.webp'
import m2 from '../img/0m3.webp'
import m3 from '../img/80.webp'
import m4 from '../img/0m8.webp'
import m8 from '../img/68.webp'
import m7 from '../img/0m1.webp'
import m6 from '../img/0m5.webp'
import m5 from '../img/65.webp'
import m10 from '../img/0m4.webp'
import m9 from '../img/0m13.webp'
import Foter from '../Foter_dop4'


const Addition_Scenarios = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется два новых сценария.</h3>
        <div className='flex justify-center'>
                  <div>
                    <img src={t1} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Пробуждение джунглей” (сложность: 3 из 5; длительность: 90-120 минут) – в этой истории наши герои абсолютно не ожидали попасть в непролазную чащу, они лишь пришли на светский приём, где один из богачей Аркхэма хвастался своими новыми приобретениями. Оказалось, южноамериканские реликвии не растеряли своей древней силы, и комнаты роскошного поместья внезапно сменяются лианами, папоротниками и тропическими деревьями.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4 обычных предметов, 0-1 уникальный предмет, 1 заклинание и 2 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
        <div className='flex justify-center'>
                  <div>
                    <img src={t2} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Во тьму” (сложность: 4 из 5; длительность: 150-180 минут) – классическая история об экспедиции, участники которой столкнулись с неведомым. Вас пригласили присоединиться – только вот никто не встретил сыщиков по прибытии. Поплутав по зелёным зарослям, вы обнаружите пустой лагерь и разрозненные записи. Они описывают какого-то невероятно грозного врага, таящегося во мраке, и призывают никогда не оставаться без источника света.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 5 обычных предметов, 1 заклинание и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m3} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]   order-3'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m7} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                        <img src={m8} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
                      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии при активном дополнении "За порогом" может появится этот монстр:</h3>
                          <div className='flex flex-row justify-center p-3'>
                              <img src={m4} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                          </div>
                      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии при активном дополнении "Улицы Аркхэма" может появится этот монстр:</h3>
                          <div className='flex flex-row justify-center p-3'>
                              <img src={m6} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                          </div>
        <div className='flex justify-center'>
                  <div>
                    <img src={t3} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Затерянный храм Йига” (сложность: 5 из 5; длительность: 90-120 минут) – кульминация тропических приключений, которая сразу же начинается в древних каменных залах храма змеиного бога. Жрецы пытаются провести ритуал по пробуждению Йига, и их успех будет означать конец человечества.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 3 обычных предметов, 1 заклинание и 2 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m9} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m10} alt="" className='p-4 w-[220px] h-[220px]   order-3'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Scenarios