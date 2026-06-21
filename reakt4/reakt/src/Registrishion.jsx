import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import API_URL from './api'

const Registrishion = () => {
  const [error, setErrors] = useState('')
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${API_URL}/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        const firstError = Object.values(data)[0]
        throw new Error(Array.isArray(firstError) ? firstError[0] : 'Ошибка регистрации')
      }

      localStorage.setItem('token', data.token)
      navigate('/profile', { replace: true })
    } catch (err) {
      setErrors(err.message)
    }
  }

  return (
    <div>
      <Header />
      <div className="bg-gray-800 p-4 sm:p-5 text-lg flex justify-center">
        <form
          className="auth-form bg-gradient-to-r from-yellow-300 via-zinc-300 to-yellow-300"
          onSubmit={handleSubmit}
        >
          {error && (
            <p className="text-red-600 font-bold text-center mb-2 bg-white p-2 rounded">
              {error}
            </p>
          )}

          <input
            type="text"
            name="username"
            placeholder="ФИО"
            onChange={handleChange}
            value={formData.username}
            required
            className="auth-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="auth-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={formData.password}
            required
            className="auth-input"
          />

          <button type="submit" className="auth-button">
            Создать аккаунт
          </button>
        </form>
      </div></div>
  )
}

export default Registrishion
