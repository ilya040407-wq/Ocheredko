import React from 'react'
import './input.css'
import Header from '../Header_dop'
import t1 from '../img/121.webp'
import t2 from '../img/122.webp'
import m2 from '../img/65.webp'
import m3 from '../img/110.webp'
import Foter from '../Foter_dop'


const Addition_Scenarios = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется два новых сценария.</h3>
        <div className='flex justify-center'>
                  <div>
                    <img src={t1} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Диадема Сумерек” (сложность: 4 из 5; длительность: 180-240 минут) – в кои-то веки сыщики отправляются на расследования не в пыльные коридоры или тёмные переулки, а на грандиозное празднование! Каждый год Ложа Серебряных Сумерек устраивает ярмарку, которую завершает пышный Сумеречный бал. Правда, девушка, выбранная в этом году Королевой бала, подозревает, что орден замышляет нечто зловещее, и нанимает вас расследовать его деятельность.</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 5 обычных предметов, 1 заклинание и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m3} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться особый культист(больше здоровья и после победы запустится финальнай сцена).</h3>
        <div className='flex justify-center'>
                  <div>
                    <img src={t2} alt="" className='p-4 w-[200px] h-[230px] float-right'/>
                    <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
“Взаперти” (сложность: 3 из 5; длительность: 120-150 минут) – этот сценарий похож на настоящий триллер в стиле “Пилы”. Сыщики просыпаются в холодной камере, не помня, как они сюда попали, и слышат сквозь стены голоса других таких же бедолаг. Как они здесь оказались, как выбраться, кто и зачем их сюда притащил – все эти вопросы придётся решать как можно быстрее!</p>  
                  </div>
                </div>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии у нас в начале будет - 3 обычных предметов и 1 уликиа</h3>
        <h3 className="text-slate-400 normal-case text-1x3 font-serif">В этом сценарии будут появляться монстры:</h3>
                      <div className='flex flex-row justify-center p-3'>
                        <img src={m3} alt="" className='p-4 w-[220px] h-[220px]   order-2'/>
                        <img src={m2} alt="" className='p-4 w-[220px] h-[220px]  order-1'/>
                      </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Scenarios