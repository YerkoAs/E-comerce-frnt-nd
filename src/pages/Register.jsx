import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';
import './styles/register.css';

const Register = () => {

  const {handleSubmit, register, reset} = useForm();

  const { registerUser } = useAuth(); // Asumiendo que `useAuth` retorna una función `registerUser`

const submit = (data) => {
  registerUser('/users', data); // Llamada a la función dentro de `submit`
  reset({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
  });
}

  /* const submit = (data) => {
    useAuth('/users', data);
    reset({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
    });
  } */

  return (
    <div className='register'>
      <div className="register__container">
        <h2 className='register__title'><span>REGISTER</span></h2>
        <form onSubmit={handleSubmit(submit)}>

          <div>
            <label htmlFor="firstName" className='login__label'>
              <input type="text" {...register('firstName')} placeholder=' ' id='firstName' className='login__input'/>
              <span className='label__name'>Enter your first name here.</span>
            </label>
          </div>

          {/* <div>
            <label htmlFor="firstName">First Name</label>
            <input {...register('firstName')} type="text" id='firstName'/>
          </div> */}

          <div>
            <label htmlFor="lastName" className='login__label'>
              <input type="text" {...register('lastName')} placeholder=' ' id='lastName' className='login__input'/>
              <span className='label__name'>Enter your last name here.</span>
            </label>
          </div>

          {/* <div>
            <label htmlFor="lastName">Last Name</label>
            <input {...register('lastName')} type="text" id='lastName'/>
          </div> */}

          <div>
            <label htmlFor="email" className='login__label'>
              <input type="email" {...register('email')} placeholder=' ' id='email' className='login__input'/>
              <span className='label__name'>Enter your email here.</span>
            </label>
          </div>

          {/* <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id='email'/>
          </div> */}

          <div>
            <label htmlFor="password" className='login__label'>
              <input type="password" {...register('password')} placeholder=' ' id='password' className='login__input'/>
              <span className='label__name'>Enter your new password here.</span>
            </label>
          </div>

          {/* <div>
            <label htmlFor="password">password</label>
            <input {...register('password')} type="password" id='password'/>
          </div> */}

          <div>
            <label htmlFor="phone" className='login__label'>
              <input type="number" {...register('phone')} placeholder=' ' id='phone' className='login__input'/>
              <span className='label__name'>Enter your phone number here.</span>
            </label>
          </div>


          {/* <div>
            <label htmlFor="phone">Phone</label>
            <input {...register('phone')} type="number" id='phone'/>
          </div> */}

          <button className='login__btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register