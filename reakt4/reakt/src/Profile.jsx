import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const Profile = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) {
                    navigate('/login')
                    return
                }

                const response = await fetch(`${API_URL}/login/`, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                })

                if (!response.ok) {
                    throw new Error('Ошибка загрузки профиля (404)')
                }

                const data = await response.json()
                setUser(data)
            } catch (err) {
                setError(err.message)
                localStorage.removeItem('token')
                navigate('/login')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [navigate])

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/', { replace: true })
    }

    // ✅ Используем loading и error — предупреждение исчезнет
    if (loading) return <div className="text-white text-center p-5">Загрузка...</div>
    if (error) return <div className="text-red-500 text-center p-5">Ошибка: {error}</div>

    return (
        <div className="text-white">
            <Header />
            <div className="p-5">
                <h2 className='text-3xl font-medium'>
                    Имя пользователя: <strong className='text-4xl'>{user?.username}</strong>
                </h2>
                <h2 className='text-3xl font-medium mt-2'>
                    Email: <strong className='text-4xl'>{user?.email}</strong>
                </h2>

                <button
                    onClick={logout}
                    className="mt-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Выйти
                </button>
            </div>
        </div>
    )
}

export default Profile