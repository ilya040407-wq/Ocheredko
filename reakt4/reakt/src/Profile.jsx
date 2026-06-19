import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'


// useEffect - выполнять побочные эффекты 

const Profile = () => {
    const [loading, setloading] = useState(true) // создаем фукцию загрузку и ее начало
    const [user, setUser] = useState(null) // создаем фукцию сбора данных о количестве пользователей
    const [error, setError] = useState('') // создаем фукцию ошибок
    const navigate = useNavigate() // создаем фукцию навигации

    useEffect(()=>{
        const fetchData = async()=>{ // создаем фукцию работаюшию паралельно с програмой на сбор даных
            try{
                const token = localStorage.getItem('token') // берем токин из хранилище 
                if(!token){ // проверяем наличие токина
                    navigate('/login') // направляем на регистрацию
                    return 
                }
                // await fetch('адрес сервера ')
                const response = await fetch('http://127.0.0.1:8000/profile/ ',{
                    headers:{
                        'Authorization': 'Token $ {token}', // шапки для кулючевых слов(тип токена)
                        'Content-Type': 'application/json' // шапки для кулючевых слов(в каком виде вернуть файлы)
                    }
                })
                if(!response.ok){  // выдать ошибку при неверном токена
                    throw new Error('404')
                }
                const data =await response.json() // забрать даные пользователей из файлов(в формате json)
                setUser(data)
            }catch(error){ // поймать ошибку, которая появилось из-за совподение логина или/и пароля
                setError(error.massage)
                localStorage.removeItem('token')// забрать токен
                navigate('/login')// направляем на регистрацию
            }finally{
                setloading(false)// завершить загрузку
            }
        }
        fetchData()
    }, [navigate])// заблокировать возможность вернутся через стрелку назад

    const logout=() =>{// настройки для кнопки выйти
        localStorage.removeItem('token')
        navigate('/',{replace:true})
    }
  return (
    <div>
        <Header></Header>
        <h2 className='text-3xl font-medium'><strong className='text-4xl font-medium '></strong>{user?.username}</h2> {/* сбор даных из сервера (имя пользователя) */}
        <h2 className='text-3xl font-medium'><strong className='text-4xl font-medium '></strong>{user?.email}</h2>
        <h2 className='text-3xl font-medium'><strong className='text-4xl font-medium '></strong>{user?.password}</h2>
        <button onClick={logout}>выйти</button>  {/* кнопка выйти */}

    </div>
  )
}

export default Profile