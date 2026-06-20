import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Foter from './Foter'

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const Login = () => {
      const navigate = useNavigate()
const[errors,setErrors] = useState('')// создание фукций ошибок
    const[fromData,setfromData] = useState({// создание фукций данных, которые будут передаваться
        // сами данные
        username:'',
        email:'',
        password:'',
    })
    const handelChange = (e)=>{// создание фукций изменений данных
        const{name, value} = e.target// данные которые будут вноситься (name- название строки, value-данные находящейся в этой стрроке)
        setfromData({...fromData, [name]:value})// беретс из fromData данные name и value и передает в setfromData
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{ //const response = await fetch('адрес сервера')
            const response = await fetch(`${API_URL}/login`,{ 
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({ // отправляем конкретные данные
                    username:fromData.username,
                    email:fromData.email,
                    password:fromData.password,
                }),
                credentials:'include'
            })
            if(!response.ok){// если не получили данные, то выдаем ошибку
                const data = await response.json()// ожидаем до последнего конца
                throw new Error(data.error)
            }else{
                const data = await response.json()// если получили данные, то создаем токен
                localStorage.setItem('token',data.token)
                navigate('/profile',{replace:true})
            }
        }catch(error){ // ловим ошибки
            setErrors(error.massege)
            localStorage.removeItem('token')
            navigate('/login')
        }
    }
return (
    <section>
        <Header></Header>
        <div className='bg-gray-800 p-5 text-lg flex justify-center'>
            <form action="form" className='p-10 gap-3 flex flex-col bg-slate-500 backdrop-opacity-15' onSubmit={handleSubmit}>
            <input type="text" 
            name='username'
            placeholder='имя пользователя'
            onChange={handelChange}
            value={fromData.username}
            required
            className='text-black w-[300px] h-[50px] rounded-[10px] p-4'/>
            <input type="email" 
            name='email'
            placeholder='email'
            onChange={handelChange}
            value={fromData.email}
            required
            className='text-black w-[300px] h-[50px] rounded-[10px] p-4'/>
            <input type="password" 
            name='password'
            placeholder='Пароль'
            onChange={handelChange}
            value={fromData.password}
            required
            className='text-black w-[300px] h-[50px] rounded-[10px] p-4'/>
            <button className='bg-red-300 text-white w-[300px] h-[50px] '> Войти</button> 
            </form>
        </div>
        <div className='bg-gray-800 p-5 text-lg flex justify-center'>
            <button className='bg-red-300 text-white w-[300px] h-[50px] hover:bg-red-500' onClick={()=>navigate('/register')}>Регестрация</button>
        </div>
        <Foter></Foter>
    </section>
  )
}

export default Login