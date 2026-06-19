import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Foter from './Foter'


const Registrishion = () => {
    const[error,setErrors] = useState('')// создание фукций ошибок
    const navigate = useNavigate()// создание фукций навигации
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
            const response = await fetch('http://127.0.0.1:8000/register/',{ 
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({ // отправляем конкретные данные
                    username:fromData.username,
                    email:fromData.email,
                    password:fromData.password,
                })
            })
            if(!response.ok){// если не получили данные, то выдаем ошибку
                const data = await response.json()// ожидаем до последнего конца
                throw new Error(data.error)
            }else{
                const data = await response.json()// если получили данные, то создаем токен
                localStorage.setItem('token',data.token)
                navigate('/login')
            }
        }catch(error){ // ловим ошибки
            setErrors(error.massege)
        }
    }
  return (
    <div>
        <Header></Header>
        <div className='bg-gray-800 p-5 text-lg flex justify-center'>
            <form action="form" className='p-10 gap-3 flex flex-col bg-gradient-to-r from-yellow-300 via-zinc-300  to-yellow-300 ' onSubmit={handleSubmit}>
            <input type="text" 
            name='username'
            placeholder='ФИО'
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
            placeholder='password'
            onChange={handelChange}
            value={fromData.password}
            required
            className='text-black w-[300px] h-[50px] rounded-[10px] p-4'/>
            <button className='bg-red-300 text-white w-[300px] h-[50px] po'> создать акаунт</button>
        </form>
        </div>
        <Foter></Foter>
    </div>
  )
}

export default Registrishion