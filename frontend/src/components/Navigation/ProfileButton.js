import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from "react-router-dom";
function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="sideBar" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <div>{user.username}</div>
          <div>{user.email}</div>
          <hr />
          <div class="navItem">{<NavLink className="navText" exact to="/">Home</NavLink>}</div>
          <div class="navItem">{<NavLink className="navText" exact to="/playlists">Upload Playlist</NavLink>}</div>
          <div class="navItem">{<NavLink className="navText" exact to="/songs">Upload Song</NavLink>}</div>
            <button className="logout" onClick={logout}>Log Out</button>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
