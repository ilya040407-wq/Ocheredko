import React from 'react'
import './input.css'
import Header from '../Header_dop1'
import f6 from '../img/0f15.webp'
import q from '../img/1111132.webp'
import Foter from '../Foter_dop1'

const Addition_Game = () => {

  return (
    <div><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>       
  <img
  src={q} className='p-2  mx-auto   w-[660px] h-[560px]  ' 
  alt=""
>
  </img>
        <h3 className="text-slate-400 normal-case font-serif italic">Запретное знание, ожидающее вас во тьме, столь же влекущее, сколь и смертоносное. Вы уже не первый, кто осмелился прикоснуться к истинам былого и грядущего... Но всех их ожидала ужасная, фатальная ошибка. Попытки воссоздания темных ритуалов из раза в раз увенчивались лишь кошмарными искажениями их тел, а разум становился подчинён воле высшего существа, не признающего никаких запретных знаний.</h3>
        <h3 className="text-slate-400 normal-case font-serif">"За порогом" – это первое новое дополнение ко второй редакции Особняки безумия, в котором вас ждут новые сыщики, заклинания, вещи и враги и два новых сценария.</h3>
        <h3 className="text-slate-400 normal-case font-serif">Появился новый жетон.</h3>
<div className='flex justify-center p-3'>
                    <div className=''>
                      <img src={f6} alt="" className='p-4 w-[200px] h-[200px] '/>
                      <p className='text-slate-400 pl-10 normal-case font-bold'>
                        Жетон ключа
                      </p>
                       </div>
                      </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">Некоторые эффекты предписывают игрокам разместить
на определённых вещах жетоны ключей.отображающий
сверхъестественную природу обычных на первый взгляд
вещей.</h3>
      <ul className='text-slate-400 text-1x3 list-disc p-3'>
        <li>Вещь с жетоном ключа получает атрибуты «Ключ» и «Доказательство»;</li>
        <li>Вещь с жетоном ключа нельзя сбросить. Если игрок должен сбросить случайную вещь, он не может сбросить вещь с жетоном ключа;</li>
      </ul>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">Во время игры фрагменты поля могут они могут перемещаться.</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">Когда вы должны переместить фрагмент поля, уберите его из прежнего места на поле и положите в игровую зону согласно указаниям приложения.</h3>
      </div>
      <Foter></Foter>
    </div>
  )
}

export default Addition_Game