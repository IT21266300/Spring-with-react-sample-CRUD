import Axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"

export default function AddUser() {
    let navigate= useNavigate()
    const[user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const{name, username, email} =user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})

    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:8080/user", user);
        navigate("/");

    };

  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
            <h2 className='text-center m-4'>Add User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
        <div className='mb-3'>
            <label htmlFor="Name" className="form-lable">
                Name
            </label>
            <input className='form-control' type='text' placeholder='Enter your Name' name='name' value={name} onChange={(e)=>onInputChange(e)}></input>
        </div>
        <div className='mb-3'>
            <label htmlFor="UserName" className="form-lable">
                User Name
            </label>
            <input className='form-control' type='text' placeholder='Enter your User Name' name='username' value={username} onChange={(e)=>onInputChange(e)}></input>
        </div>
        <div className='mb-3'>
            <label htmlFor="Email" className="form-lable">
                Email
            </label>
            <input className='form-control' type='text' placeholder='Enter your Email' name='email' value={email} onChange={(e)=>onInputChange(e)}></input>
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link className="btn btn-outline-danger mx-2 " to="/">Cancel</Link>
        </form>
        </div>
    </div>
  )
}
