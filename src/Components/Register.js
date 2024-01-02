import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

  const [id, setId] = useState(" ");
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [gender, setGender] = useState(" ");
  
  
  const Navigate = useNavigate();

  const Validate = () => {
    let isProceed = true;
    let errorMessage = 'Please enter the value ';
    if(id === '' || id === null) {
      isProceed = false;
      errorMessage += 'Username'
    }
    if(name === '' || name === null) {
      isProceed = false;
      errorMessage += 'Fullname'
    }
    if(email === '' || email === null) {
      isProceed = false;
      errorMessage += 'Email'
    }
    if(password === '' || password === null) {
      isProceed = false;
      errorMessage += 'Password'
    }

    if(!isProceed) {
      toast.warning(errorMessage);
    }
    else {
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      }
      else {
      isProceed = false;
      toast.warning('Please enter the valid email')
    }
  }
    
    return isProceed;
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {id, name, password, email, gender};
    // console.log(obj);
    if(Validate()) {
    
    fetch("  http://localhost:3001/user", {
      method: "POST",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(obj)
    }).then((res) => {
      toast.success('Registered successfully')
    }).catch((err) => {
      toast.error('Failed :' +err.message);
    });
    }
  }

  return (  
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        onSubmit={handleSubmit}
        >
       
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold"> User Registration</span>

          <div className="py-4">
          <label>User Name<span className=' text-red-600'>*</span></label>
            <input
              autoComplete='off'
              onChange={(e) => setId(e.target.value)}
              value={id}
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              id="id"
              placeholder='Username'
            />

            <div className="py-4">
            <label>Full Name<span className=' text-red-600'>*</span></label>
            <input
              type="text"
              id="fullname"
              placeholder='Full Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>


          <label>Email<span className=' text-red-600'>*</span></label>
            <input
              type="email"
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              id="email"
              placeholder='Email'
            />
          </div>


            <div className="py-4">
            <label>Password<span className='errmsg text-red-600'>*</span></label>
            <input
              type="password"
              id="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>

          <div className="py-4">
            <label>Gender</label>
            <br></br>
            <input 
            type="radio"
            checked={gender === 'male'} 
            onChange={e => setGender(e.target.value)} 
            name="gender" 
            value="male" 
            className="app-check"></input>
            <label>Male</label>
            <input 
            type="radio" 
            checked={gender === 'female'} 
            onChange={e => setGender(e.target.value)} name="gender" value="female" className="app-check"></input>
            <label>Female</label>

            
          </div>
          
          {/* <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div> */}

          
          <button
            type='submit'
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>

          <p className='text-center'> Already have an  account ? <Link to="/login" className='cursor-pointer underline'>Login</Link></p>

          
          {/* <div className="text-center text-gray-400">

            Dont'have an account?
            <span className="font-bold text-black">Sign up for free</span>
          </div> */}

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

export default Register





