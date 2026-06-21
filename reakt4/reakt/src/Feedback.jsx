import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Foter from './Foter'

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000'

const Feedback = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', text: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', text: '' })

    try {
      const response = await fetch(`${API_URL}/feedback/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.detail || 'Ошибка отправки')
      }

      setStatus({ type: 'success', text: data.message || 'Сообщение отправлено!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <Header />
      <div className="bg-gray-800 min-h-[60vh] p-4 sm:p-8 flex justify-center">
        <form
          className="auth-form bg-slate-600"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white text-2xl sm:text-3xl text-center font-bold mb-2">
            Обратная связь
          </h1>
          <p className="text-slate-300 text-center text-sm mb-4">
            Напишите нам — ответ придёт на указанный email
          </p>

          {status.text && (
            <p
              className={`text-center p-2 rounded font-medium ${
                status.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {status.text}
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
            className="auth-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="auth-input"
          />

          <textarea
            name="message"
            placeholder="Сообщение"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="auth-input min-h-[150px] resize-y"
          />

          <button
            type="submit"
            disabled={loading}
            className="auth-button disabled:opacity-60"
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-slate-300 hover:text-white text-center mt-2"
          >
            На главную
          </button>
        </form>
      </div>
      <Foter />
    </section>
  )
}

export default Feedback
