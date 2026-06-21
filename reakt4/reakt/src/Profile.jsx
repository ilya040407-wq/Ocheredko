import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import API_URL from './api'

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

        const response = await fetch(`${API_URL}/profile/`, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Не удалось загрузить профиль')
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

  if (loading) {
    return (
      <div className="text-white text-center p-5 min-h-screen bg-gray-900">
        Загрузка...
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-5 min-h-screen bg-gray-900">
        Ошибка: {error}
      </div>
    )
  }

  return (
    <div className="text-white min-h-screen bg-gray-900">
      <Header />
      <div className="p-4 sm:p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Профиль</h1>
        <h2 className="text-xl sm:text-2xl font-medium break-words">
          Имя пользователя: <strong>{user?.username}</strong>
        </h2>
        <h2 className="text-xl sm:text-2xl font-medium mt-4 break-words">
          Email: <strong>{user?.email}</strong>
        </h2>
        <button
          onClick={logout}
          className="mt-6 auth-button max-w-xs hover:bg-red-600"
        >
          Выйти
        </button>
      </div></div>
  )
}

export default Profile
