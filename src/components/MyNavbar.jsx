import React, {useEffect, useState } from 'react'
import '../assets/Mynavbar.css'
import { useNavigate } from 'react-router-dom'

const MyNavbar = () => {
  const [user,setUser]=useState("")
  useEffect(()=>{
    if(localStorage.getItem('User')){
      setUser(localStorage.getItem('User'))
    }
  },[user])

  const handleLogout=()=>{
    localStorage.removeItem('User')
    setUser("")
  }

  const navigate=useNavigate()

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NEW<span>SCHOOL</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#About">About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#Footer">Contact us</a>
        </li>
      </ul>
      {user ? <div style={{display :'flex' , alignItems : 'center' , gap : 10}}>
      {user}  <button onClick={handleLogout} className="btn btn-primary" >Logout</button>
      </div>: <button onClick={()=>{navigate("/login")}} className="btn btn-primary" >Login</button>}
    </div> 
  </div>
</nav>
  )
}

export default MyNavbar