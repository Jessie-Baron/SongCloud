import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Users.css'

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      console.log("this is the response list", responseData)
      setUsers(responseData.Users);
    }
    fetchData();
  }, []);

  console.log("this is the users list", users)

  const userComponents = users?.slice(1,4)?.map((user) => {
    return (
      <div className='user-suggested' key={user.id}>
        <img className='profile' src={user?.imageUrl} alt="user logo" />
        <div className='suggested-text'>
        <NavLink className='user-header' to={`/users/${user?.id}`}>{user.username}</NavLink>
        <p className='users-name'>
        {user?.firstName}
        &nbsp;{user?.lastName}
        </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
