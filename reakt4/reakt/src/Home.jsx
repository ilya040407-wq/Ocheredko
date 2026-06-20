import React, {  } from 'react'
import './input.css'
import Header from './Header'
import ABOUT from './img/about.webp'
import Foter from './Foter'
const Home = () => {



  return (
    <section>
        <Header></Header>
  <div className='bg-gray-500'>
    <h1 className=" text-stone-700 text-center uppercase text-4xl  py-3">Добро пожаловать гость</h1>
    <h2 className=" text-stone-700 text-center  text-2xl  py-3">Мы приглашаем вас посетить особняк и раскрыть все его тайны</h2>
    <img alt=""  src={ABOUT}  className='p-2 w-[770] h-[560] mx-auto' />
      <div className=" bg-gray-800 text-lg">
                                    <p className="text-slate-400 text-justify normal-case text-base indent-2 italic p-4">Грязные переулки с мрачные особняки Архома стали пристанищем для древних сил, жуткие секретов и неописуемых монстров.
      За стенами древних построек бормочущие безумцы и культисты взывают к Древним, а чудовища, неведомые смертным учёным, рыщут под горбатой луной.
      Сегодня ночью горстка храбрых сыщиков отважится проникнуть за закрытые двери Аркхэма и бросить вызов безумству, что скрывается за ними…
</p>
                  <p className="text-slate-400 text-justify normal-case  text-base indent-2 p-4">«Особняки безумия»– это кооперативная игра, 
                    действие которой происходит в мире Говарда Лавкрафта, мастера ужаса и автора мифов о Древних. 
                    Игрокам предстоит взять на себя роли сыщиков и окунуться в мрачный и наполненный безумием мир.
</p>
                  <p className="text-slate-400 text-justify normal-case  text-base indent-2 p-4">“Мифы” — необъяснимые явление, 
                    происходящие во вселенной и часто те кто сталкиваются с ними, 
                    не могут долго прийти в себя или окончательно сходят с ума.
</p>
          </div>
          <div className=" bg-gray-600 text-lg">
          <h1 className="text-slate-400 text-center uppercase text-4xl mb-2 py-6 ">О нас </h1>
          <h3 className="text-slate-400 text-center normal-case text-base indent-2 p-4">Я делаю даный сайт просто, чтобы расказать другим об этой настольной игре, которую многие просто забыли или незнали </h3>
          </div>
          </div>
      <Foter></Foter>
    </section>
  )
}

export default Home
//   const containerVariants = {
//  visible: {
//    transition: {
//      staggerChildren: 0.2  // задержка 0.2с между детьми
//    }
//  }
//};

//const itemVariants = {
//  size: { opacity: 1, y: 0,scaleX: 2, scaleY: 1},
//  sizeinitial: {opacity: 0, y: 20 ,scaleX: 1, scaleY: 1}
//};