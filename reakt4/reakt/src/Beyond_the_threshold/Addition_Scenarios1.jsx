import React from 'react'
import './input.css'
import Header from '../Header_dop1'
import t1 from '../img/6h.webp'
import t2 from '../img/7h.webp'
import m2 from '../img/76.webp'
import Foter from '../Foter_dop1'


const Addition_Scenarios = () => {
  return (
    <div><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется два новых сценария.</h3>
        <div className='flex justify-center'>
                  <div>
                    <img src={t1} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Врата поместья Сильвервуд” (сложность: 4 из 5; длительность: 120-180 минут) – история, в которой детектива больше, чем боевика. Знакомый полицейский попросил наших сыщиков помочь ему найти несколько исчезнувших людей, которых объединяет только то, что все они останавливались в поместье Сильвервуд и сталкиваетесь с совершенно необъяснимыми явлениями. Похоже, поток времени внутри этого здания нестабилен – комнаты меняют своё местоположение.</p>  
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
“Мстительные порывы” (сложность: 2 из 5; длительность: 90-120 минут) – это камерный детектив в лучших традициях Агаты Кристи. Сыщиков приглашают на званый ужин – хозяин вечера считает, что кто-то из четверых гостей планирует его убийство. Он просит наших героев вычислить злодея (при этом стараясь не вести расследование слишком уж явно – например, не обыскивать дом на глазах у гостей) и раскрыть его мотивы.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 3 обычных предметов, 0-1 уникальный предмет, 1 заклинание и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии есть возможность закончить сценарий без боя</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии появится только один уникальный монстр:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
      </div>
      <Foter></Foter>
    </div>
  )
}

export default Addition_Scenarios