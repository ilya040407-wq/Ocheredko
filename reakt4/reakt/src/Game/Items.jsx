import React from 'react'
import './input.css'
import Header from '../Header_game'
import z from '../img/44.webp'
import z2 from '../img/33.webp'
import z3 from '../img/34.webp'
import z3z from '../img/32.webp'
import z2z from '../img/30.webp'
import p from '../img/43.webp'
import pr from '../img/42.webp'
import pb from '../img/40.webp'
import pv from '../img/37.webp'
import pd from '../img/39.webp'
import pbk from '../img/41.webp'
import pbt from '../img/38.webp'
import pc from '../img/36.webp'
import poc from '../img/35.webp'
import Foter from '../Foter_game'

const Items = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif"> В начале каждого сценариев нам выдают определенное количество “обычных вешей”, иногда “уникальная веши” и одно или два заклинания. Они получаются в начале и в ходе сценария из разных жетонов обыска и просто валяются на самом поле.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={z} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Заклинание
              </p>
               </div>
              <div className=''>
              <img src={p} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
                Обычная веши
              </p>
            </div>
              <div className=''>
              <img src={pr} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-14 normal-case text-1x2 font-bold'>
                Уникальная веши
              </p>
            </div>
	        </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif font-bold"> “Обычных вешь” - предметы, к котором относится: оружия ближнего боя, оружие дальнего боя и различное снаряжение:</h3>
      <ul className='text-slate-400 list-disc p-3'>
        <li>Оружия ближнего боя - может атаковать монстра только в своей области и делятся на клинковое и тяжелое;</li>
          <div className='flex justify-center p-3'>
            <div className=''>
              <img src={pbt} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-11 normal-case text-1x2 font-bold'>
                Тяжелое оружие
              </p>
               </div>
              <div className=''>
              <img src={pb} alt="" className='p-4 w-[200px] h-[180px] '/>
              <p className='text-slate-400 pl-4 normal-case text-1x2 font-bold'>
                Символ ближнего боя
              </p>
            </div>
              <div className=''>
              <img src={pbk} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-11 normal-case text-1x2 font-bold'>
                Клинковое оружие
              </p>
            </div>
	        </div>
        <li>Оружия дальнего боя - может атаковать любого монстра в пределах своей дальности(Дальность на три области и нельзя отсчитывать через стены или двери, если только эффект прямо не укажет на такую возможность. );</li>
          <div className='flex justify-center p-3'>
            <div className=''>
              <img src={pv} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-8 normal-case text-1x2 font-bold'>
                Огнестрельное оружие
              </p>
               </div>
              <div className=''>
              <img src={pd} alt="" className='p-4 w-[200px] h-[180px] '/>
              <p className='text-slate-400 pl-6 normal-case text-1x2 font-bold'>
                Символ дальнего боя
              </p>
            </div>
	        </div>
        <li>снаряжение - предметы, помогающий в ходе сценария, они делятся на те которые нужно особое действия и те которые действуют постоянно или в определены моменте;</li>
          <div className='flex justify-center p-3'>
            <div className=''>
              <img src={pc} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-11 normal-case text-1x2 font-bold'>
                работает пассивно
              </p>
               </div>
              <div className=''>
              <img src={poc} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400  text-center normal-case text-1x2 font-bold'>
                Работает только 
              <p>
                При использовании 
              </p>
              <p>
               Особом действии
              </p>
              </p>
            </div>
	        </div>
        </ul>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif"> Уникальные веши - часто нужны по заданию (это ключи или различные улики) и часто они содержат головоломки</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif"> Заклинания(все атакующих заклинаний - дальнего боя) - “это книги или свитки, таящие в себе знания, необходимые для обуздания древних сил, но заклинатель должен заплатить за использование этой силы”. Может атаковать любого монстра в пределах своей дальности и помогают команде(Дальность на три области и нельзя отсчитывать через стены или двери, если только эффект прямо не укажет на такую возможность. ). Все заклинание имеют отдачу ( на оборотной стороне текст или проверка которая выполняется после использование заклинание и берет другую карту этого заклинание)</h3>
      	  <div className='flex flex-row justify-center p-3'>
            <img src={z3} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
            <img src={z2} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
          </div>
            <div>
            <p className='text-slate-400 text-center normal-case text-1x2 font-bold'>
              Лицевая сторона
            </p>
          </div>
          <div className='flex flex-row justify-center p-3'>
            <img src={z3z} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
            <img src={z2z} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
          </div>
           <div>
            <p className='text-slate-400 text-center normal-case text-1x2 font-bold'>
              Оборотная сторона
            </p>
          </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Items