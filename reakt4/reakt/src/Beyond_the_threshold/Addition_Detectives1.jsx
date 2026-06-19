import React from 'react'
import './input.css'
import Header from '../Header_dop1'
import d5 from '../img/028.webp'
import d6 from '../img/029.webp'
import Foter from '../Foter_dop1'

const Addition_Detectives = () => {
  return (
    <div><Header></Header>
      <div className='bg-gray-800 p-5 text-lg'>
      <h3 className="text-slate-400 normal-case text-1x3 font-serif">В дополнении появляется два новых детективов.</h3>
          <div className='flex justify-center'>
            <div>
              <img src={d5} alt="" className='p-4 w-[340px] h-[220px] float-left'/>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
Уилсон Ричардс всегда был мастером на все руки. У него особый талант чинить всё, что
сломано, разбито и разрушено. Уилсон идёт туда, куда его зовёт работа, и не задержи-
вается на одном месте. Он знает, что если предложит человеку честную сделку, то вза-
мен получит честное отношение.</p>  
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Однако в последнее время на пути ему встречаются
всякие странности, а внезапная дрожь пробирает его не только в заброшенных обвет-
шалых домах. Эти огромные особняки таят в себе больше проблем, чем протекающая
крыша. Уилсон Ричардс знает, что не может починить всё на свете, но раз уж человеку
новезло знать своё призвание, ему хватит ума не отвергать его.</p>
            </div>
          </div>          
          <div className='flex justify-center'>
            <div>
              <img src={d6} alt="" className='p-4 w-[340px] h-[220px] float-left'/>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic'>
Ещё с детства, проведённого в Нигерии, Акачи держалась особняком. Её привычка
болтать с кем-то невидимым и нежелание общаться со сверстниками привели к тому,
что в деревне её считали сумасшедшей. Несмотря на это, местный жрец первым заме-
тил её истинный потенциал.</p>  
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Он считал, что духи сулят Акачи величие, и научил ее
использовать эту связь с выгодой для себя. Под его руководством Акачи стала мудрым
молодым предводителем и заслужила уважение не только жителей деревни, но и всех,
к кому она приходит на помощь.</p>
              <p className='text-slate-400 normal-case text-1x3 font-serif p-5 italic '>
Сейчас, когда она готова встретиться лицом к лицу
со своей судьбой, Акачи расследует потусторонние угрозы извне, конец которым могут
положить только её знания.</p>
            </div>
          </div>
      </div>
      <Foter></Foter>
    </div>
  )
}

export default Addition_Detectives