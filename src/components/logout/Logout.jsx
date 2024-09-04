import React from 'react';
import './styles/logout.css';
// import imgUser from '../../../public/assets/user.png'

const Logout = ({handleLogout}) => {
  return (
    <div className='logout'>
        <div className="logout__container">
            <figure className='logout__img'>
                <img src='../../../assets/user.png' alt="user" />
            </figure>
            <button onClick={handleLogout} className='logout__btn'>Logout</button>
        </div>
    </div>
  )
}

export default Logout