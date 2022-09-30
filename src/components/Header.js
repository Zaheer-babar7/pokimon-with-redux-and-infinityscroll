import React from 'react'
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='header'>
      React Redux Thunk Axios Router 
    </div>
    <Outlet />
    </>
  )
}

export default Header
