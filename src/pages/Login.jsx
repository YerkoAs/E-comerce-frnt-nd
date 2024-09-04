
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Logout from '../components/logout/Logout';
import './styles/login.css'

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const [error ,setError] = useState()
  const [token, setToken] = useState();
  const navigate = useNavigate(); 
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const submit = async (data) => {
    try {
      await useAuth('/users/login', data);
      setToken(localStorage.getItem('token'));
      reset({
        password: '',
        email: '',
      });
      navigate('/');
    } catch (error) {
      setError(error.message)
      console.error('Error during login:', error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken();
  }

  return (
    <div className='login'>
      {
        token ?
          <Logout handleLogout={handleLogout} />
          :
          <div className='login__container'>
            <h2 className='login__title'><span>LOGIN</span></h2>

            <div className='login__test'>
              <span>Test Users</span>
              <span>email: yerko@gmail.com</span>
              <span>password: yerko123</span>
            </div>

            <form onSubmit={handleSubmit(submit)} className='login__form'>
              <div>
                <label htmlFor="email" className='login__label'>
                  <input type="email" {...register('email')} placeholder=' ' id='email' className='login__input'/>
                  <span className='label__name'>Enter your email here.</span>
                </label>
              </div>
              <div>
                <label htmlFor="password" className='login__label'>
                  <input type="password" {...register('password')} placeholder=' ' id='password' className='login__input'/>
                  <span className='label__name'>Enter your password here.</span>
                </label>
                <h2 className={error?'active' : 'non-active'}>Incorrect username or password</h2>
              </div>

              <button className='login__btn'>Log in</button>
              
            </form>
            <p className='login__text'>If you are not registered yet, please <Link to={'/register'}>register here</Link>.</p>
          </div>
      }
    </div>
  )
}

export default Login;