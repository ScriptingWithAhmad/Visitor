import React from 'react'
import UserList from '../Components/UserList';

const User=() => {
    const User = [{
        id: "u-1",
        name: "Mark Willsons",
        img: "https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_640.jpg",
        places: "3"
    }] 
  return (
    <UserList items={User}/>
  )
}

export default User;
