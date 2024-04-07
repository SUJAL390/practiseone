import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [information, setInformation] = useState({
    username:'',
    email: '',
    password: '',
    confirmpassword:'',
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', information);
    
    // Clear email, password, and checkbox fields
    setInformation({
      username:'',
      email: '',
      password: '',
      confirmpassword:'',
      rememberMe: false,
      
    });
  };

  const handleChange = (e) => {
    const { name, value,  checked } = e.target;
    const newValue = name === 'checkbox' ? checked : value;
    setInformation((prevInformation) => ({
      ...prevInformation,
      [name]: newValue,
    }));
  };
 const navigate=useNavigate()
  const handleClick=(link)=>{
    navigate(link)
    
  }

  return (
    <div className='text-2xl flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500   w-screen h-screen rounded shadow'>
      <div className="bg-white   shadow p-4   h-5/6 ">
        <form onSubmit={handleSubmit}>
        <div className='p-6 text-2xl'>
            <input
              className="border w-full placeholder-black border-black rounded-md py-2 px-3 focus:outline-none focus:border-pink-100"
              name='username'
              type="text"
              placeholder='Enter your name'
              value={information.username}
              onChange={handleChange}
              required // Input is required
            />
          </div>
          <div className='p-6 text-2xl'>
            <input
              className="border placeholder-black w-full border-black rounded-md py-2 px-3 focus:outline-none focus:border-pink-100"
              name='email'
              type="email"
              placeholder='Enter your email address'
              value={information.email}
              onChange={handleChange}
              required // Input is required
            />
          </div>
          <div className='p-6 text-2xl'>
            <input
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:border-pink-100  placeholder-black w-full"
              type="password"
              name='password'
              placeholder='Enter your password'
              value={information.password}
              onChange={handleChange}
              required // Input is required
            />
          </div>
          <div className='p-6 text-2xl'>
          <input
  className="border border-black rounded-md py-2 px-4 focus:outline-none focus:border-pink-100 placeholder-black w-full h-12"
  type="password"
  name='confirmpassword' 
  placeholder='Confirm your password'
  value={information.confirmpassword}
  onChange={handleChange}
  required // Input is required
/>


          </div>
          <div className='p-4 pl-6  text-2xl'>
            <label htmlFor="rememberMe" className="mr-2">Remember me</label>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={information.rememberMe}
              onChange={handleChange}
            />
          </div>
          <div className='h-auto flex justify-around gap-20'>
          <button className='pt-3 px-3 text-2xl pb-1 text-black hover:text-blue-600' type="submit">Next</button>
          
          <button className="rounded-lg    text-black "onClick={()=>handleClick("/")} > Back to Home</button>
          </div>
          <div ><button mt-3 onClick={()=>handleClick("/auth/signin")}  className=' text-xs  text-black hover:text-blue-600' type="submit">Already have an account?Sign IN</button></div>
          </form>
      </div>
    </div>
  );
};

export default SignUp;
