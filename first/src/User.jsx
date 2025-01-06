import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './User.css';

const User = () =>{
    const[user,setUser]= useState([]);
    useEffect(()=>{
        axios.get('https://backenddemo-d7o7.onrender.com/api/user/fetch')
        .then((results)=>{
            setUser(results.data.users)
        })
    },[])
    const deleteUser = (id) => {
        axios.delete(`https://backenddemo-d7o7.onrender.com/api/user/delete/${id}`)
        .then((res)=>{
            console.log("User Deleted")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
    <div>
        <h1>User</h1>
        <Link to="/create">Create</Link>
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                user.map((users)=>{
               return(
                <tr>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.address}</td>
                 <td>
                 <Link to={`/update/${users._id}`}>
                 <button>Update</button></Link>
                 <button onClick={(e)=>deleteUser(users._id)}>Delete</button>
              

                 </td>
                 </tr>
                )
                })
            }
            </tbody>
        </table>
      
    </div>
  )
}

export default User
