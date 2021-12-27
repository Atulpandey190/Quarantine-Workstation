import React from 'react'
import { Dashboard } from '../Dashboard/Dashboard'
import { useState } from 'react';
import './Home.css'
export default function Home() {
    const [userlogin,setuserlogin]=useState(1);
    const [username,setusername]=useState('');
    return (  
      <div className='home'>
      {userlogin?(
        <div className='login'>
        <h1>User Login</h1>
        <div className='login-area'>
            <input type="text"
                   placeholder='Enter Username Here....'
                   className='user-input'
                   onChange={(e)=>{
                      setusername(e.target.value)
                     }}                ></input>
            <button className='login-btn' onClick={(e)=>{
                setuserlogin(0)
            }
            }>Login</button>
        </div>
    </div>        
      ):(
        <Dashboard curruser={username} />
      )}
      </div>

    )
}
