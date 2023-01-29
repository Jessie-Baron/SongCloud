import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory } from "react-router-dom";


function ProfileButton({ user }) {
  const currentUser = useSelector(state => state.session.user)

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
        <i class="fa-brands fa-soundcloud" id="logo"></i>      <div className="tabsContainer">
        <h2 className='tabs'>{<NavLink className="tabText" exact to="/home">Home</NavLink>}</h2>
        <h2 className="tabs" >{<NavLink className="tabText" exact to="/feed">Feed</NavLink>}</h2>
        <h2 className="tabs" id="tab3">{<NavLink className="tabText" exact to="/library">Library</NavLink>}</h2>
        <i class="fa-solid fa-ellipsis" id="menu-icon"onClick={openMenu}></i>
      </div>
        {showMenu && (
        <ul className="profile-dropdown">
          <div>{user.username}</div>
          <div>{user.email}</div>
          <hr />
          <div className="navItem">{<NavLink className="navText" exact to="/home">Home</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/playlists">Upload Playlist</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/songs">Upload Song</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to={`/users/${currentUser.id}`}>Profile</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/feed">Feed</NavLink>}</div>
          <div className="navItem">{<NavLink className="navText" exact to="/library">Library</NavLink>}</div>
          <div className="navItem" id="logout"onClick={logout}>Log Out</div>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
