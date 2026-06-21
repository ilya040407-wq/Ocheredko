import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import API_URL from './api'

const Login = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState('')
  const [formData, setFormData] = useState({
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
      const response = await fetch(`${API_URL}/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.errors?.non_field_errors?.[0] || 'Ошибка входа')
      }

      localStorage.setItem('token', data.token)
      navigate('/profile', { replace: true })
    } catch (error) {
      setErrors(error.message)
      localStorage.removeItem('token')
    }
  }

  return (
    <section>
      <Header />
      <div className="bg-gray-800 p-4 sm:p-5 text-lg flex justify-center">
        <form
          className="auth-form bg-slate-500 backdrop-opacity-15"
          onSubmit={handleSubmit}
        >
          {errors && (
            <p className="text-red-600 font-bold text-center mb-2 bg-white p-2 rounded">
              {errors}
            </p>
          )}

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
            Войти
          </button>
        </form>
      </div>
      <div className="bg-gray-800 p-4 sm:p-5 text-lg flex justify-center">
        <button
          className="auth-button max-w-md hover:bg-red-500"
          onClick={() => navigate('/register')}
        >
          Регистрация
        </button>
      </div></section>
  )
}

export default Login
