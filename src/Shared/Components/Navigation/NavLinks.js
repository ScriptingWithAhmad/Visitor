import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

function NavLinks(props) {
    return (
        <ul className='nav-links'>
            {/* <li > */}
            <li >
                <NavLink to='/' exact>ALL USERS</NavLink>
            </li>
            {/* <li to='/u1/places' > */}
            <li  >
                <NavLink to='/u1/places'>ALL PLACES</NavLink>
            </li>
            {/* <li to='/places/new'> */}
            <li >
                <NavLink to='/places/new'>ADD PLACES</NavLink>
            </li>
            {/* <li to='/auth'> */}
            <li >
                <NavLink to='/auth'>AUTHENTICATION</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;
