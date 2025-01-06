import React, { useState } from 'react'
import './User.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [address,setAddress]=useState('');
  const navigate=useNavigate()
  const submit = (e) => {
     e.preventDefault(); 
     axios.post('https://backenddemo-d7o7.onrender.com/api/user/create',{name,email,address})                                              
      .then((res)=>{
        console.log(res.data);
        navigate('/');
      })
      .catch((err)=>{console.log(err)})
    }
  return (
    <div>
      Create User
      <form onSubmit={submit}>
        Name:<input type='text' onChange={(e)=>setName(e.target.value)}>
        </input><br/>

        Email:<input type='email' onChange={(e)=>setEmail(e.target.value)}/><br/>

        Address:<input type='text' onChange={(e)=>setAddress(e.target.value)}/><br/>

        <button >Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
