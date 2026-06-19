import React from 'react'
import './input.css'
import Header from '../Header_game'
import t1 from '../img/73.webp'
import t2 from '../img/72.webp'
import t3 from '../img/71.webp'
import t4 from '../img/70.webp'
import t5 from '../img/11h.webp'
import m1 from '../img/65.webp'
import w from '../img/80.webp'
import m2 from '../img/77.webp'
import m5 from '../img/75.webp'
import m6 from '../img/76.webp'
import m7 from '../img/78.webp'
import m8 from '../img/74.webp'
import m9 from '../img/69.webp'
import m10 from '../img/68.webp'
import Foter from '../Foter_game'

const Scenarios = () => {
  return (
    <section><Header></Header>
    <div className="bg-gray-800 p-5 text-lg">
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">“Сценарий” - миссия, которые мы в роле сыщика будем выполнять, он каждый раз меняет местоположение сыщиков и выдаваемые предметы (обычные предметы, 1-2 заклинание) и улики</h3>
      <div className='flex justify-center'>
                  <div>
                    <img src={t5} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
      Такие сценарии являются заблокированы, пока не активируете дополнение или не купите дополнителный сценарий к дополнению (будет красная лента с надписю DLS) </p>  
                  </div>
                </div>
      <div className='flex justify-center mt-6'>
                  <div>
                    <img src={t1} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
      “Круг вечности” (сложность: 2 из 5; длительность: 60-90 минут) – самое первое, короткое и несложное приключение, чья задача – познакомить игроков с основными механиками. Сыщики учатся вести исследования, собирать и использовать улики, решать головоломки и сражаться с монстрами, пытаясь при этом не погибнуть и не сойти с ума. Сюжет тоже самый что ни на есть классический: паникующий дворецкий зовёт вас осмотреть таинственное поместье, чей владелец недавно скончался. По его словам, в этих стенах творится что-то противоестественное, а полиция, конечно же, не верит ни единому слову.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 4 обычных предметов, 1 заклинание и 2 уликиs</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m1} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]  order-3'/>
                      </div>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m6} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m8} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                        <img src={m7} alt="" className='p-4 w-[220px] h-[220px]  order-3'/>
                      </div>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={w} alt="" className='p-4 w-[230px] h-[230px]  '/>
                      </div>
                       <div>
                  </div>
      <div className='flex justify-center'>
                  <div>
                    <img src={t2} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
      “Побег из Инсмута” (сложность: 4 из 5, продолжительность: 90-150 минут) уже бросает игрокам гораздо более серьёзный вызов. Теперь сыщики исследуют не одно здание, а целый портовый городок Инсмут (готовьте на столе много места для поля!). Знакомые с творчеством писателя из Провиденса знают, что Инсмут не так прост – местные жители давным-давно заключили договор с пугающими обитателями глубин, и теперь на улицах можно встретить земноводных чудовищ, которые начнут пугать и атаковать игроков. Более того, сами жители тоже откровенно враждебно относятся к незнакомцам и несмотря на все эти сложности, сыщикам необходимо собрать информацию о родословной одного уважаемого семейства и успеть живыми выбраться из проклятого города.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 3-4 обычных предметов, 1-2 заклинание, 2 уникальных предмета и 2 улики</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m1} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]  order-3'/>
                      </div>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m10} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m9} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
                       <div>
                  </div>
      <div className='flex justify-center'>
                  <div>
                    <img src={t3} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Разорванные узы” (сложность: 5 из 5; длительность: 120-180 минут) могут оказаться не по зубам даже опытным игрокам! Семейство Бекманов просит о помощи – их семью преследует нечто жуткое. Игроки поистине окажутся будто в фильме ужасов, окружённые внезапными звуками, неожиданно выпрыгивающими монстрами и зловещими реликвиями, из-за которых все и началось. И если наши смельчаки ещё смогут защитить себя от всего этого, то беспомощных Бекманов придётся постоянно спасать, отвлекая от них внимание чудовищ и пряча в подходящих комнатах. </p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 5-6 обычных предметов, 1-2 заклинание и 1 улики</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={w} alt="" className='p-4 w-[230px] h-[230px]   order-2'/>
                        <img src={m8} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]  order-3'/>
                      </div>
                       <div>
                  </div>
      <div className='flex justify-center'>
                  <div>
                    <img src={t4} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Нарастающая волна” (сложность: 3 из 5; длительность: 240-360 минут) - самый продолжительный сценарий, похожий уже не на отдельный хоррор, а на целый сериал. Сыщики вновь в Инсмуте – им стало известно, что некто вновь планирует провести здесь запретный ритуал. В этот раз есть целых 6 подозреваемых: от владелицы отеля, в котором вы остановились, до хозяйки книжного магазина. Двое из этого списка – культисты, планирующие принять участие в ритуале. Правильно вычисленные культисты сильно облегчат ваше расследования, однако даже в случае неудачи у вас ещё останется возможность прервать ритуал и спасти человечество – прямо в ходе его проведения! </p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 3 обычных предмета, 1 заклинание, 1 уникальный предмет и 1 улики</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии есть несколько концовок (кроме успешного раследование и полного провало)</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m10} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                        <img src={m5} alt="" className='p-4 w-[220px] h-[220px]  order-3'/>
                      </div>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m9} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m8} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                        <img src={m7} alt="" className='p-4 w-[220px] h-[220px]  order-3'/>
                      </div>
    </div>
    <Foter></Foter>
    </section>

  )
}

export default Scenarios