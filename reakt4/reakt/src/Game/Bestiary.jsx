import React from 'react'
import './input.css'
import Header from '../Header_game'
import m1 from '../img/65.webp'
import m2 from '../img/66.webp'
import m3 from '../img/6.webp'
import m4 from '../img/7.webp'
import m5 from '../img/75.webp'
import m6 from '../img/76.webp'
import m7 from '../img/78.webp'
import m8 from '../img/74.webp'
import m9 from '../img/69.webp'
import m10 from '../img/68.webp'
import pbk from '../img/41.webp'
import pbt from '../img/38.webp'
import pv from '../img/37.webp'
import z3 from '../img/34.webp'
import e from '../img/4.webp'
import eo from '../img/5.webp'
import w from '../img/80.webp'
import Foter from '../Foter_game'

const Bestiary = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">Во время прохождение сценария сыщики не раз столкнутся с монстрами, которые станут серьезной угрозой на пути расследование. Они будут представлять серьезную угрозу рассудку и телу.</h3>
      <h3 className="text-slate-400 normal-case text-2x1 font-serif">Монстры - этим термином описываются все враги (от культистов до звездного отродье) и управляются через приложение. Каждый монстр не бессмертный и всех их можно победить.</h3>
      	  <div className='flex flex-row justify-center'>
            <img src={m1} alt="" className='p-4 w-[160px] h-[180px]  order-2'/>
            <img src={m8} alt="" className='p-4 w-[160px] h-[180px]  order-1'/>
          </div>
          <div>
            <p className='text-slate-400 normal-case text-1x2 font-bold text-center'>
              Жетон монстра (лицевая сторона)
            </p>
          </div>
          <div className='flex flex-row justify-center'>
            <img src={m3} alt="" className='p-4 w-[160px] h-[180px]  order-2'/>
            <img src={m4} alt="" className='p-4 w-[160px] h-[180px]  order-1'/>
          </div>
           <div>
            <p className='text-slate-400 text-center normal-case text-1x2 font-bold'>
              Жетон монстра (обратная сторона)
            </p>
      </div>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">На лицевой стороне можно увидеть:</h3>
      <ul className='text-slate-400 list-disc p-3'>
        <li>Бдительность (в верхнем правом углу): используется, когда сыщик проводит проверку ухода в области, где находится несколько монстров (игрок проводит проверку ухода только против монстра с самым высоким значением бдительности).</li>
        <li>Значение ужаса(в нижнем правом углу): используется, когда сыщик проводит проверку ужаса и в пределах его дальности находятся несколько монстров (игрок проводит проверку ужаса только против монстра с самым высоким значением ужаса).
На обратная стороне можно увидеть:</li>
        <li>Крепость мускулов(в нижнем правом углу): используется при розыгрыше ряда эффектов (Если монстр пытается переместиться сквозь забаррикадированную дверь, он бросает столько кубиков, каково значение его крепости мускулов. Если он получает два или более успехов, баррикада сбрасывается, и монстр продолжает перемещение как обычно. В противном случае монстр не перемещается.)</li>
        <li>Способности и художественный текст: способности монстров, если они есть, отмечены на обратной стороне жетона(есть «Водный» и «Летающий»). Художественный текст даёт краткое описание внешности и поведения монстра.</li>
      </ul>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">Чтобы напасть на монстра, сыщик использует приложение, где игрок тыкает на кнопку «Перечень монстров» (1), затем он выбирает монстра, которого собирается атаковать и нажимает на кнопку «Атаковать», после смотрит, что у него есть (какого типа оружие у него есть), если нет оружие, то бейте голыми руками (6). Помимо этого есть кнопка «Уйти», она позволяет отойти от монстра и есть название, иллюстрация и здоровье(7) монстра.</h3>
            <div className='flex justify-center p-3'>
              <div className=''>
                <img src={pbk} alt="" className='p-4 w-[230px] h-[340px] '/>
                <p className='text-slate-400 pl-8 normal-case text-1x2 font-bold'>
                  Клинковое оружие (3)
                </p>
              </div>
          <div className=''>
          <img src={pbt} alt="" className='p-4 w-[230px] h-[340px] '/>
          <p className='text-slate-400 pl-11 normal-case text-1x2 font-bold'>
            Тяжелое оружие (2)
          </p>
        </div>
      </div>
      <div className='flex justify-center p-4'>
            <div className=''>
              <img src={pv} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-4 normal-case text-1x2 font-bold'>
               Огнестрельное оружие (4)
              </p>
               </div>
              <div className=''>
              <img src={z3} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-16 normal-case text-1x2 font-bold'>
               Заклинание (5)
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src={e} alt="" className='p-2 w-[880px] h-[680px] mx-auto'/>
          </div>
          <div>
              <p className='text-slate-400 pl-4 normal-case text-1x2 font-bold text-center'>
               Панель «Перечень монстров»
              (активирована кнопку «Атаковать»)
              </p>
          </div>
      <h3 className="text-slate-400 normal-case p-1 text-lg font-serif">После выбора чем мы атакуем(допустим мы бьем клинковым оружием), нужно будет пройти проверку(8) и будет два исхода или успех(если прошли проверку) или провал(если не прошли проверку):</h3>
        <ul className='text-slate-400 list-disc p-3'>
        <li>в успех входит: урон от оружие, урон от проверки или урон от оружие + проверки (иногда урон фиксированы);</li>
        <li>в провал входит: ничего, потеря оружие или получение урона по себе.</li>
      </ul>
        <div className='flex justify-center p-4'>
            <img src={eo} alt="" className='p-2 w-[880px] h-[680px] mx-auto'/>
          </div>
          <div>
              <p className='text-slate-400 pl-4 normal-case text-xl font-bold text-center'>
               Панель «Перечень монстров»
                (проверка)
              </p>
          </div>
      <h3 className="text-slate-400 normal-case text-2xl font-serif font-bold text-center">Монстры и их способности с художественный текстом </h3>
      <h3 className="text-slate-400 normal-case text-lx3 font-serif">Разнообразие способностей: </h3>
        <ul className='text-slate-400 list-disc p-3'>
        <li>летающий - может передвигается через непроходимые границы(желтые границы);</li>
        <li>водный - может передвигается через непроходимые водные границы;</li>
        <li>бестелесный - может передвигается через непроходимые границы и стены.</li>
      </ul>
      <div className='flex flex-row'>
                  <div>
                    <img src={m1} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Порой обычные люди всецело посвящают себя необычным явлениям. У кого-то из них хорошие намерения, у кого-то . . . нет.</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m2} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-9 italic'>
                      Это существо похоже на человека еще меньше, чем его товарищи, а рыбий взгляд и липкая кожа недвусмысленно намекают </p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>  на его прародителей.</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m5} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - Водный</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 italic'>
                      Внушающее страх могущественное слияние рыбы и человека - квакающее, прыгающее, с острыми зубами и когтями.</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m6} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - Бестелесный</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-60 mr-7 italic'>
                      Мерцающие и ирреальные призраки - это духи почтивших, обреченные скитаться в мире живых.</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m7} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 italic'>
                      Жрец Дагона посвятивший всего себя служению безобразному божеству, представляет собой воплощение союза человека </p>
                    <p className='text-red-600 normal-case text-1x3 font-serif  italic'>  и подводного монстра.</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m8} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - Летающий</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-20 mr-7 italic'>
                      Упругая, блестящая кожа и щупальца вокруг рта намекали на подводную природу этой огромной космической твари, </p>
                      <p className='text-red-600 normal-case text-1x3 font-serif  italic'>  но ее крылья и когти заставляют задуматься о гораздо более страшных предках.</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m9} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-24 mr-7 italic'>
                      Простой люд, собрашись в большие толпы, является собой немалую опасность. Правда, в большинстве случаев лишь </p>
                      <p className='text-red-600 normal-case text-1x3 font-serif  italic'>  друг для друга.</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={m10} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - нет</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-52 mr-7 italic'>
                      На первый взгляд кажется, что это человек, но в крови этой твари таится отвратительный секрет</p>
                  </div>
                </div>
      <div className='flex flex-row'>
                  <div>
                    <img src={w} alt="" className='p-4 w-[220px] h-[220px] float-left'/>
                    <p className='text-red-600 normal-case text-1x3 font-serif p-5 italic'>
                      Способностей - Летающий</p>  
                    <p className='text-red-600 normal-case text-1x3 font-serif pt-5 pl-48 mr-7 italic'>
                      Это кровожадное змееподобное иссиня-черное существо летает в ночи, высматривая очередную жертву. </p>
                      <p className='text-red-600 normal-case text-1x3 font-serif  italic'>  Его изменчивый образ недоступен взору простого смертного.</p>
                  </div>
                </div>
    </div>
    <Foter></Foter>
    </section>
  )
}

export default Bestiary