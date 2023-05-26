import React, { useContext, useEffect, useState } from 'react'
import '../assets/Login.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITSTATE={
  login:"",
  password:""
}

const Login = () => {
  const [data,setData]=useState(INITSTATE);
  useEffect(() =>{
    if(localStorage.getItem("User")){
      navigate("/")
    }
  },[])
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(data.login==="" || data.password===""){
      toast.error("Empty Fields ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }else{
      const res = await axios.get("https://localhost:7210/api/Surveillants/Login/"+data.login+"/"+data.password);
      console.log(res.data)
      if(!res.data.isUserExists){
        toast.error('User Or Password is invalid', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setData({
          login:data.login,
          password:""
        })
      }else{
        toast.success('Hi '+res.data.nomUser, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          localStorage.setItem("User",res.data.nomUser);
        // if(res.data.userType=="etudiant") navigate("//")
        // else if(res.data.userType=="prof") navigate("//")
        // else if(res.data.userType=="surveillant") navigate("//")
        // else  navigate("//") 
      }
    }
  }

  const handleChange=(e)=>{
    const value = e.target.value;
    setData(
{      ...data,
      [e.target.name]:value}
    )
    console.log(data)
  }
  return (
    <div className="login-form">
      <ToastContainer />
       <form onSubmit={handleSubmit}>
        <input type="text" class="form-control" id="exampleInputEmail1" value={data.login} onChange={handleChange} name='login' placeholder="example@gmail.com" />
        <input type="password" class="form-control" id="exampleInputPassword1" value={data.password} onChange={handleChange} name='password' placeholder="password" />
        <input type="submit" className="btn btn-primary"/>
       </form>
    </div>
  )
}

export default Login