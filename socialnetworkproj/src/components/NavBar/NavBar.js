import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar(){
    return(
        <div className='navbar'>
            <NavLink to='/'>Profile</NavLink>
            <NavLink to='/messages'>Messages</NavLink>
            <NavLink to='/user'>Users</NavLink>
        </div>
    )
}

export default NavBar