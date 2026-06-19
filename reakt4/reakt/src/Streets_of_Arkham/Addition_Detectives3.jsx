import React from 'react'
import './input.css'
import Header from '../Header_dop3'
import d5 from '../img/06.webp'
import d6 from '../img/05.webp'
import d7 from '../img/08.webp'
import d8 from '../img/07.webp'
import Foter from '../Foter_dop3'

const Addition_Detectives = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется четыре новых детективов.</h3>
          <div className='flex justify-center'>
            <div>
              <img src={d5} alt="" className='p-4 w-[340px] h-[220px] float-left'/>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
Томми Малдун приехал в Аркхэм с твёрдым решением изменить мир к лучшему сразу
после того, как прошёл полицейскую подготовку в Бостоне. Хотя он и происходит
из семьи служителей правопорядка, Томми оказался не готов к странным происшестви-
ям, которые стали случаться в Аркхэме.</p>  
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Неважно, где находится место преступления:
в дымном подпольном баре или у окровавленного алтаря, - Томми не успокоится, пока
не привлечёт виновного к ответственности. А со своей проверенной винтовкой
«Бекки» под рукой он сможет найти выход даже из самых безнадёжных ситуаций.</p>
            </div>
          </div>          
          <div className='flex justify-center'>
            <div>
              <img src={d6} alt="" className='p-4 w-[340px] h-[220px] float-left'/>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
Недавно получив во владение собственный бизнес, Диана гордилась тем, что её приняли
в престижный орден - ложу Серебряных сумерек. Членство в ордене как нельзя лучше
сказывалось на деловых отношениях, но со временем собрания начали становиться всё
более зловещими. </p>  
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Наблюдая за таинственным ритуалом под полной луной, Диана ста-
ла догадываться об истинной природе ордена. Теперь она точно знает, что к Аркхэму
приближаются силы зла, а Ложа каким-то образом к этому причастна.</p>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Чтобы не дать ложе Серебряных сумерек достигнуть своей конечной цели, Диана Стэн-
ли решила уничтожить орден изнутри, чего бы это ни стоило. Она готова подверг-
нуть свою жизнь опасности, если взамен получит шанс на искупление.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div>
              <img src={d7} alt="" className='p-4 w-[340px] h-[220px] float-left'/>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
Когда нужно довести дело до конца, то во всём, что касается перевоза товаров, Финн
Эдвардс больше доверяет собственной смекалке, чем оружию. Его цель - всегда быть
готовым, когда что-то неминуемо пойдёт наперекосяк, и эта тактика его пока
не подводила.  </p>  
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Финн поставлял спиртное по всему Восточному побережью,
но в последнее время сбыту товаров мешают разные необъяснимые явления.
Теперь оставаться на шаг впереди врагов стало значительно сложнее. Несмотря
на это, Финн не против ввязаться в неприятности, если знает, как из них выпутаться.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div>
              <img src={d8} alt="" className='p-4 w-[340px] h-[220px] float-left'/>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
В Новом Орлеане все знают, что в голосе Мари Ламбо есть что-то особенное, что-то
магическое. Благодаря своему пленительномуталанту она может посещать самые
элитные мероприятия по всему миру, и никто из тех, кому доводится слышать голос
Мари, не может устоять перед её чарами. </p>  
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Однако большинство её поклонников даже
не догадываются, что её grande-mère, живущая на болотах, научила её не только народ-
ным песням.</p>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Теперь Мари использует полученные тайные знания, чтобы противосто-
ять хаосу, который угрожает Аркхэму. И она всегда может рассчитывать на помощь
своих поклонников из клуба «Соловей».</p>
            </div>
          </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Detectives