import React from 'react'
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='header'>
      Pokimon
    </div>
    <Outlet />
    </>
  )
}

export default Header
