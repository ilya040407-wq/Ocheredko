import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

// useEffect - выполнять побочные эффекты
const Profile = () => {
    const [loading, setLoading] = useState(true) // создаем функцию загрузки и ее начало
    const [user, setUser] = useState(null) // создаем функцию сбора данных о пользователях
    const [error, setError] = useState('') // создаем функцию ошибок
    const navigate = useNavigate() // создаем функцию навигации

    useEffect(() => {
        const fetchData = async () => { // создаем функцию работающую параллельно с программой на сбор данных
            try {
                const token = localStorage.getItem('token') // берем токен из хранилища
                if (!token) { // проверяем наличие токена
                    navigate('/login') // направляем на вход
                    return
                }
                // await fetch('адрес сервера')
                const response = await fetch(`${API_URL}/login/`, {
                    headers: {
                        'Authorization': `Token ${token}`, // шапки для ключевых слов(тип токена)
                        'Content-Type': 'application/json' // шапки для ключевых слов(в каком виде вернуть файлы)
                    }
                })
                if (!response.ok) { // выдать ошибку при неверном токене
                    throw new Error('404')
                }
                const data = await response.json() // забрать данные пользователей из файлов(в формате json)
                setUser(data)
            } catch (err) { // поймать ошибку, которая появилась из-за совпадения логина или/и пароля
                setError(err.message)
                localStorage.removeItem('token') // забрать токен
                navigate('/login') // направляем на вход
            } finally {
                setLoading(false) // завершить загрузку
            }
        }
        fetchData()
    }, [navigate]) // заблокировать возможность вернутся через стрелку назад

    const logout = () => { // настройки для кнопки выйти
        localStorage.removeItem('token')
        navigate('/', { replace: true })
    }

    // Используем loading и error, чтобы убрать предупреждение ESLint
    if (loading) return <div className="text-white text-center p-5">Загрузка...</div>
    if (error) return <div className="text-red-500 text-center p-5">Ошибка: {error}</div>

    return (
        <div className="text-white">
            <Header />
            <div className="p-5">
                <h2 className='text-3xl font-medium'>
                    Имя пользователя: <strong className='text-4xl'>{user?.username}</strong>
                </h2> {/* сбор данных из сервера (имя пользователя) */}
                <h2 className='text-3xl font-medium mt-2'>
                    Email: <strong className='text-4xl'>{user?.email}</strong>
                </h2>
                {/* Пароль убран в целях безопасности! */}

                <button
                    onClick={logout}
                    className="mt-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Выйти
                </button> {/* кнопка выйти */}
            </div>
        </div>
    )
}

export default Profile