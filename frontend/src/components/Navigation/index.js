import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='favicon'>
        <i class="fa-brands fa-soundcloud" id="login-icon"></i>
        <div className="favicon-text">SONGCLOUD</div>
        </div>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <header>
    <div className='navBar'>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </div>
    </header>
  );
}

export default Navigation;
