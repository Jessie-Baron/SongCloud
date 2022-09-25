import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory } from "react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()


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

  const logout = async (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
    .then(history.push("/"))
  };

  return (
    <>
    <div className="tabContainera">
      <button className="sideBar" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <div>{user.username}</div>
          <div>{user.email}</div>
          <hr />
          <div className="navItem">{<NavLink className="navText" exact to="/">Home</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/playlists">Upload Playlist</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/songs">Upload Song</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/allPlaylists">Playlists</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/allSongs">Songs</NavLink>}</div>
            <button className="logout" onClick={logout}>Log Out</button>
        </ul>
      )}
      <div className="tabsContainer">
        <h2 className='tabs'>{<NavLink className="tabText" exact to="/allSongs">Songs</NavLink>}</h2>
        <h2 className="tabs" >{<NavLink className="tabText" exact to="/allPlaylists">Playlists</NavLink>}</h2>
      </div>
      </div>
    </>
  );
}

export default ProfileButton;
