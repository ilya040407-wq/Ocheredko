import React from 'react'
import './input.css'
import Header from '../Header_dop2'
import t1 from '../img/1h.webp'
import t2 from '../img/2h.webp'
import t3 from '../img/122.webp'
import m2 from '../img/65.webp'
import m5 from '../img/0m9.webp'
import m6 from '../img/0m10.webp'
import m4 from '../img/0m3.webp'
import m7 from '../img/0m12.webp'
import m8 from '../img/67.webp'
import m9 from '../img/68.webp'
import m3 from '../img/80.webp'
import Foter from '../Foter_dop2'


const Addition_Scenarios = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется три новых сценария.</h3>
        <div className='flex justify-center'>
                  <div>
                    <img src={t1} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Убийство на борту "Старгейзер Маджестик" (сложность: 3 из 5; длительность: 90-150 минут) – ещё один камерный детектив, в котором убийство произошло на борту дирижабля, парящего в небе над Атлантическим океаном.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4 обычных предметов, 0-1 уникальный предмет, 1 заклинание и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии есть возможность закончить сценарий без боя</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m3} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии при активном дополнении "Путь змеи" может появится этот монстр:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m4} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                      </div>
        <div className='flex justify-center'>
                  <div>
                    <img src={t2} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Поезд на Аркхэм” (сложность: 4 из 5; длительность: 90-120 минут) – настоящее “Убийство в Восточном экспрессе” с примесью стиля Лавкрафта. Ваша попутчица Харриет уверяет, что за поездом следует какая-то злая сила, и связаны с ней не только вы, но и другие пассажиры поезда. Внезапно гаснет свет, и Харриет бесследно исчезает.  А когда обнаружится, что вместе с вами на борту состава едут ужасающие чудовища, придётся выбирать: сражаться с ними в тесных переходах, или начать отсоединять от локомотива вагоны с монстрами, рискуя при этом потерять и ценные улики.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4 обычных предметов, 1 заклинание и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m6} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
        <div className='flex justify-center'>
                  <div>
                    <img src={t3} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Скрытые глубины” (сложность: 5 из 5; длительность: 120-180 минут) – один из самых оригинальных сценариев всей линейки “Особняков безумия”. Кто-то вывел из строя двигатели океанского лайнера “Моргана”. Корабль начинает тонуть, и у сыщиков очень мало времени на то, чтобы вычислить диверсанта. Только вот на этот раз не нужно вести долгие беседы с npc-персонажами, ведь предатель – один из игроков, сидящих за столом!</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4 обычных предметов, 0-1 уникальный предмет, 1-2 заклинание, каждому игроку выдается карта роли и 2 улики</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии есть несколько концовок (зависящих от-того кого больше роли "людей" или "глубоководных")</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m7} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m9} alt="" className='p-4 w-[220px] h-[220px]   order-3'/>
                        <img src={m8} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Scenarios