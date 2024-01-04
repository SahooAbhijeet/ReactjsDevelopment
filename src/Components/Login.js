import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../utils/Auth';

const Login = () => {

 

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState();
  const { login } = useContext(AuthContext);
  const Navigate = useNavigate();

  useEffect(() => {
   sessionStorage.clear();

  },[]);


    const handleLogin = () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs";

      login(token);
    }

  const ProceedLogin = (e) => {
    e.preventDefault();
    if(Validate()) {

      let obj = {"username": username, "password": password};

      fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    }).then((res) => {
      return res.json();

    
      }).then((resp) => {
        console.log(resp)
        if(Object.keys(resp).length === 0) {
          toast.error('Login failed, invalid credentials');   
          } else {
          
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('jwttoken',resp.jwtToken);

            Navigate('/')
          } 
      }).catch((err) => {
        toast.error('Login failed due to :' + err.message);
      });
    }
  }
  const Validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please Enter Username');
  }
    if(password === '' || password === null) {
      result = false;
      Toaster.warning('Please Enter Password');
    }
    return result;
  }

  return (  
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        onSubmit={ProceedLogin}
        >
       
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold"> User Login </span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            {/* <span className="mb-2 text-md">Email</span> */}
            <label>UserName<span className=' text-red-600'>*</span></label>
            <input
              type="text"
              
              autoComplete='off'
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              // name="email"
              id="username"
              placeholder='UserName'

            />
          </div>
          <div className="py-4">
            {/* <span className="mb-2 text-md">Password</span> */}
            <label>Password<span className='errmsg text-red-600'>*</span></label>
            <input
              type="password"
              // name="pass"
              id="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">

          </div>
          <button
            type='submit'
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            onClick={handleLogin}
          >
            Sign in
          </button>
          
          <p className="text-center ">
            Dont'have an account?
            <Link to="/register" className='underline'><br></br>Sign up for free</Link>
          </p>
        </div>
        
        <div className="relative">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1704028991~exp=1704029591~hmac=50c2076d30d230821ffef28e7e50563571fc72502bc626da0887c1051e18b713"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
          </div>
        </div>
      </form>
    </div>
 
  )
}

export default Login





