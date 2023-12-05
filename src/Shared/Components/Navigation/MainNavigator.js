import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import "./MainNavigator.css";
import MainHeader from './MainHeader';
import NavLink from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

function MainNavigator() {
  const [backDrawerIsOpen, setBackDrawerIsOpen] = useState(false);

  const openDrawer =()=>{
    setBackDrawerIsOpen (true);
  }
  
  const closeDrawer =()=>{
    setBackDrawerIsOpen (false);
  }


  return (
    <React.Fragment>
      {backDrawerIsOpen && <Backdrop onClick={closeDrawer }/>}
      {backDrawerIsOpen && <SideDrawer onClick={closeDrawer}>
        <nav className='main-navigation__drawer-navn'>
          <NavLink/>
        </nav>
      </SideDrawer>}
      <MainHeader >
        <button className='main-navigation__menu-btn ' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation_title'>
          <Link to='/'>Your Places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLink />
        </nav>
      </MainHeader>
    </React.Fragment>
  )

}

export default MainNavigator;
