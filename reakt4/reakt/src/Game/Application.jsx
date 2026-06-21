import React from 'react'
import './input.css'
import Header from '../Header_game'
import Ie from '../img/re.webp'
import t1 from '../img/11111.webp'
import t2 from '../img/22222.webp'
import t3 from '../img/33333.webp'
import t4 from '../img/444444.webp'
import t5 from '../img/55555.webp'
import t6 from '../img/6666.webp'
import t7 from '../img/77777.webp'
import t8 from '../img/88888.webp'
import Foter from '../Foter_game'

const Application = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case  font-serif">Приложение - самая важная часть игры Особняк безумие и делая ее уникальной игрой. Через приложение выполняются большинство действий: исследование, обыск, взаимодействие(разговор с не игровыми персонажами), атака, все проверки, решение головоломка, переключение фаз, контроль монстров, выбор сценариев, выбор сыщиков, стартовый набор, размещение тайлов карты и тд.</h3>
      <h3 className="text-slate-400 normal-case  font-serif font-bold">Разберем только основные окна приложение:</h3>
      <ul className='text-slate-400 list-disc p-3 '>
        <li>Начальный экран - что встречает игроков при входе в это приложение. Встречает несколько кнопок: «Новая игра»(1) здесь начинается новый сценарий, «Продолжить»(2) здесь продолжается не закончены сценарий(сохраняется автоматически), «Моя коллекция»(3) здесь можно активировать дополнение к основной игре, «Настройки»(4) и «Выйти»(5).</li>
        <div className='flex justify-center'>
          <img src={Ie} alt=""  className='p-4 w-[800px] h-[600px] ' />
        </div>
        <li>Окно «Новая игра» - встречает с выбора сценария, после выбора и нажатие на кнопку «Выбрать сыщика»(6), открывается окно с выбором сыщика, после выбора сыщика(минимум 2 - максимум 5, зависит от количество игроков, а когда один, то играешь за двоих) и нажатие на кнопку «Получить стартовое имущество»(7) и после выдачи-дележки, нажимаем на «Прослушать подготовку к игре»(8). Просушив мы начинаем сценарий нажав на кнопку «Продолжить»(9)</li>
        <div className='flex justify-center '>
          <div>
            <img src={t1} alt=""  className='p-4 w-[400px] h-[300px] ' />
            <p className='text-slate-400 normal-case  font-serif pl-36 font-bold'>
              Выбор сценария
            </p>
            </div>
            <div>
            <img src={t2} alt=""  className='p-4 w-[400px] h-[300px] ' />
            <p className='text-slate-400 normal-case  font-serif pl-36 font-bold'>
              Выбрать сыщика
            </p>
            </div>
          </div>
        <div className='flex justify-center '>
          <div>
            <img src={t3} alt=""  className='p-4 w-[400px] h-[300px] ' />
            <p className='text-slate-400 normal-case  font-serif pl-16 font-bold'>
              Получить стартовое имущество
            </p>
            </div>
            <div>
            <img src={t4} alt=""  className='p-4 w-[400px] h-[300px] ' />
            <p className='text-slate-400 normal-case  font-serif pl-16 font-bold'>
              Прослушать подготовку к игре
            </p>
            </div>
          </div>
        <li>Игровой интерфейс - в течение игры большую часть времени сыщики будут взаимодействовать с цифровым приложением: «Карта»(10), Кнопка «Игровое меню»(11), Кнопка «Перечень монстров»(12), Кнопка «Инвентарь»(13), Перечень монстров/инвентарь(при нажатии на кнопках «Перечень монстров» и «Инвентарь»), Кнопка «Конец фазы»(14), Кнопка «Настройки»(15).</li>
        <div className='flex justify-center'>
          <img src={t5} alt=""  className='p-4 w-[800px] h-[600px] ' />
        </div>
        <li>Игровое меню - в нем находится, «Цель мисии»(16) и кнопки: «Продолжить сценарий»(17), «Журнал сообщений»(18) здесь можно перечитать сообщений, «Закончить игру»(19) просто заканчивает игру, «Поджечь»(20) отображение для приложение, что огонь есть, «Сыщик погиб»(21) провал расследование и игроки проигрывают(по обычным правилом), «Сохранится и выйти»(22).;</li>
        <div className='flex justify-center'>
          <img src={t6} alt=""  className='p-4 w-[800px] h-[600px] ' />
        </div>
        <li>Конец фазы - поваляет изменять фазы</li>
        <div className='flex justify-center '>
          <div>
            <img src={t7} alt=""  className='p-4 w-[400px] h-[300px] ' />
            <p className='text-slate-400 normal-case  font-serif pl-36 font-bold'>
              Фаза сыщиков
            </p>
            </div>
            <div>
            <img src={t8} alt=""  className='p-4 w-[400px] h-[300px] ' />
            <p className='text-slate-400 normal-case  font-serif pl-36 font-bold'>
              Фаза мифа
            </p>
            </div>
          </div>
      </ul>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Application
