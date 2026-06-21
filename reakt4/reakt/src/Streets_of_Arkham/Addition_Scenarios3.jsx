import React from 'react'
import './input.css'
import Header from '../Header_dop3'
import t1 from '../img/9h.webp'
import t2 from '../img/10h.webp'
import t3 from '../img/12h.webp'
import m2 from '../img/0m2.webp'
import m4 from '../img/80.webp'
import m3 from '../img/0m5.webp'
import m6 from '../img/0m6.webp'
import m7 from '../img/69.webp'
import m5 from '../img/65.webp'
import Foter from '../Foter_dop3'


const Addition_Scenarios = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется два новых сценария.</h3>
        <div className='flex justify-center'>
                  <div>
                    <img src={t1} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Астральная алхимия” (сложность: 4 из 5; длительность: 90-120 минут) – даёт возможность вдоволь побродить по Мискатоникскому университету, ведь, по словам позвонившей вам профессора, опыты местных учёных привели в коридоры существ из другого измерения! Высшее учебное заведение поистине обширное: в самом начале партии команда сыщиков получает в своё распоряжение карту, которая помогает найти дорогу между лабораторным корпусом, библиотекой и другими помещениями. Враги здесь тоже появляются с самого начала, так что размеренно и неторопливо вести расследование не получится.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4-5 обычных предметов, 0-1 уникальный предмет, 1-2 заклинание и 2 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m3} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m4} alt="" className='p-4 w-[220px] h-[220px]   order-3'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
        <div className='flex justify-center'>
                  <div>
                    <img src={t2} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Банды Аркхэма” (сложность: 3 из 5; длительность: 180-240 минут) – уже из названия понятно, что этот сценарий посвящён криминальным авторитетам массачусетского городка. Разборки между двумя бандами обострились после обнаружения изувеченного тела. Однако сыщики подозревают, что с такой нечеловеческой жестокостью действовало нечто потустороннее. В ходе этого дела они окажутся буквально между двух огней.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4 обычных предметов, 1 заклинание и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии есть возможность закончить сценарий без боя с бандами</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m7} alt="" className='p-4 w-[220px] h-[220px]   order-3'/>
                        <img src={m6} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
        <div className='flex justify-center'>
                  <div>
                    <img src={t3} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Злополучная выставка” (сложность: 5 из 5; длительность: 120-180 минут) – раскрывает перед сыщиками двери Мискатоникского музея. Здесь вас ждёт самая сложная детективная загадка во всей линейке “Особняков безумия” – предисловие в приложении даже рекомендует делать заметки в ходе партии. Помощница куратора уверена, что спонсоры выставки редких экспонатов умирают один за другим вовсе не случайно – причиной этого является один из найденных в недавней экспедиции артефактов. Сыщикам необходимо вычислить, какой из предметов несёт на себе проклятье.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4 обычных предметов, 1 заклинание и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии есть несколько концовок (кроме успешного раследование и полного провало)</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии нет монстров:</h3>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Scenarios