import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Foter from './Foter'

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const Login = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState('')
    const [fromData, setfromData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handelChange = (e) => {
        const { name, value } = e.target
        setfromData({ ...fromData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: fromData.username,
                    email: fromData.email,
                    password: fromData.password,
                }),
                credentials: 'include'
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || 'Ошибка входа')
            } else {
                const data = await response.json()
                localStorage.setItem('token', data.token)
                navigate('/profile', { replace: true })
            }
        } catch (error) {
            setErrors(error.message)
            localStorage.removeItem('token')
        }
    }

    return (
        <section>
            <Header />
            <div className='bg-gray-800 p-5 text-lg flex justify-center'>
                <form
                    className='p-10 gap-3 flex flex-col bg-slate-500 backdrop-opacity-15 rounded'
                    onSubmit={handleSubmit}
                >
                    {/* ✅ Используем errors — предупреждение исчезнет */}
                    {errors && (
                        <p className="text-red-600 font-bold text-center mb-2 bg-white p-2 rounded">
                            {errors}
                        </p>
                    )}

                    <input
                        type="text"
                        name='username'
                        placeholder='имя пользователя'
                        onChange={handelChange}
                        value={fromData.username}
                        required
                        className='text-black w-[300px] h-[50px] rounded-[10px] p-4'
                    />

                    <input
                        type="email"
                        name='email'
                        placeholder='email'
                        onChange={handelChange}
                        value={fromData.email}
                        required
                        className='text-black w-[300px] h-[50px] rounded-[10px] p-4'
                    />

                    <input
                        type="password"
                        name='password'
                        placeholder='Пароль'
                        onChange={handelChange}
                        value={fromData.password}
                        required
                        className='text-black w-[300px] h-[50px] rounded-[10px] p-4'
                    />

                    <button
                        type="submit"
                        className='bg-red-300 text-white w-[300px] h-[50px] rounded hover:bg-red-400'
                    >
                        Войти
                    </button>
                </form>
            </div>
            <div className='bg-gray-800 p-5 text-lg flex justify-center'>
                <button
                    className='bg-red-300 text-white w-[300px] h-[50px] hover:bg-red-500 rounded'
                    onClick={() => navigate('/register')}
                >
                    Регистрация
                </button>
            </div>
            <Foter />
        </section>
    )
}

export default Login