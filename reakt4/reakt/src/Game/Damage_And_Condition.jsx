import React from 'react'
import './input.css'
import Header from '../Header_game'
import s from '../img/27.webp'
import r from '../img/28.webp'
import u from '../img/29.webp'
import r1 from '../img/25.webp'
import r2 from '../img/26.webp'
import u1 from '../img/23.webp'
import u2 from '../img/24.webp'
import r3 from '../img/21.webp'
import r4 from '../img/22.webp'
import u3 from '../img/19.webp'
import u4 from '../img/20.webp'
import s1 from '../img/13.webp'
import s2 from '../img/14.webp'
import s3 from '../img/15.webp'
import s4 from '../img/16.webp'
import s5 from '../img/17.webp'
import s6 from '../img/18.webp'
import b1 from '../img/9.webp'
import b2 from '../img/10.webp'
import b3 from '../img/11.webp'
import b4 from '../img/12.webp'
import Foter from '../Foter_game'

const Damage_And_Condition = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
              <h3 className="text-slate-400 normal-case text-1x3 font-serif">Во время прохождение сценария сыщики не раз столкнутся с опасностями, которые не смогли избежать или не могли избежать и получили рану, ужас или/и состояние. Когда какой-либо эффект вынуждает сыщика получить урон или ужас, он берёт верхнюю карту из колоды урона или ужаса соответственно. Сыщик кладёт эту карту перед собой в открытую, если эффект не предписывает иного, а различные эффекты могут давать сыщикам состояния. В эффекте, который даёт сыщику состояние, используется слово «станьте».</h3>
          <div className='flex justify-center p-3'>
            <div className=''>
              <img src={s} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-8 normal-case text-1x2 font-bold'>
                Карта состояния
              </p>
               </div>
              <div className=''>
              <img src={r} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-6 normal-case text-1x2 font-bold'>
                Карта урон (закрытая)
              </p>
            </div>
            <div className=''>
              <img src={u} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-400 pl-6 normal-case text-1x2 font-bold'>
                Карта ужаса (закрытая)
              </p>
            </div>
          </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">Урона и ужаса - Каждая карта содержит один из двух атрибутов: «Разыграйте немедленно» или «Держите в открытую». Когда сыщик берёт карту урона или ужаса с атрибутом «Разыграйте немедленно», он немедленно разыгрывает эффект, который обычно предписывает закрыть эту карту. Карты урона и ужаса с атрибутом «Держите в открытую» оказывают продолжительный эффект всё время, пока карта остаётся лежать в открытую.</h3>
                <div className='flex flex-row justify-center p-3'>
                  <img src={r1} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={r2} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                </div>
                <div className='flex flex-row justify-center p-3'>
                  <img src={u1} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={u2} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                </div>
                 <div>
                  <p className='text-slate-400 text-center normal-case text-1x2 font-bold'>
                    Карты урон и ужаса (в открытую)
разыгрываются немедленно 
                  </p>
            </div>
                <div className='flex flex-row justify-center p-3'>
                  <img src={r3} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={r4} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                </div>
                <div className='flex flex-row justify-center p-3'>
                  <img src={u3} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={u4} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                </div>
                 <div>
                  <p className='text-slate-400 text-center normal-case text-1x2 font-bold'>
                    Карты урон и ужаса (в открытую)
                    держать на столе
                  </p>
            </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif pt-4">Состояние - эффект который сыщик получил при своих действиях. (чаще всего получает при атаках монстра):</h3>
      <ul className='text-slate-400 list-disc p-3'>
        <li>Когда сыщик получает состояние, он берёт соответствующую карту и кладёт её перед собой в открытую (стороной с иллюстрацией вверх).
          <p>1 Сыщик не может иметь несколько одинаковых состояний.</p>
          <p>2 Если карта состояния двухсторонняя, сыщик получает случайную копию этого состояния.</p>
        </li>
        <li>Часть карт состояний двухсторонние (информация напечатана и на лицевой, и оборотной стороне).
          <p>1 Сыщики не могут просматривать оборотную сторону карты состояния, за исключением случаев, когда это позволяет эффект.</p>
          <p>2 Получив карту «Безумный», сыщик может прочитать информацию на оборотной стороне, но не может раскрывать её содержание другим сыщикам.</p>
        </li>
        <li>Когда сыщик сбрасывает карту состояния, он возвращает её в колоду.</li>
        <li>Сыщики не могут просматривать оборотные стороны карт в колоде состояний.</li>
      </ul>
                <div className='flex flex-row justify-center p-3'>
                  <img src={s1} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={s2} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                  <img src={s3} alt="" className='p-4 w-[230px] h-[340px]  order-3'/>
                </div>
                <div className='flex flex-row justify-center p-3'>
                  <img src={s4} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={s5} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                  <img src={s6} alt="" className='p-4 w-[230px] h-[340px]  order-3'/>
                </div>
                 <div>
                  <p className='text-slate-400 text-center normal-case text-1x2 font-bold'>
                    карта состояния
                  </p>
            </div>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif pt-4">Как только сыщик получает суммарный урон (неважно, в открытую или в закрытую), равный значению его здоровья или больше, он становится раненым.</h3>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif pt-4">Когда сыщик становится раненым, он получает состояние «Раненый» и сбрасывает все карты урона, лежащие в закрытую. Раненый сыщик не может выполнять действие «перемещение» более одного раза в раунд. Как только раненый сыщик получает суммарный урон, равный значению его здоровья или больше, он погибает.</h3>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif pt-4">Как только сыщик получает суммарный ужас (неважно, в открытую или в закрытую), равный значению его рассудка или больше, он становится безумным.</h3>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif pt-4">Когда сыщик становится безумным, он получает состояние «Безумный» и сбрасывает все карты ужаса, лежащие в закрытую. Он читает обратную сторону своей карты «Безумный», но не раскрывает её содержание другим сыщикам.</h3>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif pt-4">Состояние «Безумный» может изменить для сыщика условия победы или поражения в игре. В этом случае он может захотеть выполнить одно или несколько редко используемых действий. Как только безумный сыщик получает суммарный ужас, равный значению его рассудка или больше, он погибает.</h3>
            <h3 className="text-slate-400 normal-case text-1x3 font-serif pt-4">Карты «Безумный» имеют символ, в вправо нижнем углу, показывающий при каком минимальном количестве игроков она играется, если это число больше количества участников текущей партии, то сыщик, взявший карту «Безумный», сбрасывает её и берёт другую карту состояния «Безумный».</h3>
                <div className='flex flex-row justify-center p-3'>
                  <img src={b1} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={b2} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                </div>
                <div className='flex flex-row justify-center p-3'>
                  <img src={b3} alt="" className='p-4 w-[230px] h-[340px]   order-2'/>
                  <img src={b4} alt="" className='p-4 w-[230px] h-[340px]  order-1'/>
                </div>
                 <div>
                  <p className='text-slate-400 text-center normal-case text-1x2 font-bold'>
                    Карта состояния «Безумный» (в открытую)
                  </p>
            </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Damage_And_Condition