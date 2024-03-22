import React, { useState } from 'react';

const SignIn = () => {
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

  return (
    <div className='text-2xl flex flex-col justify-center items-center bg-blue-400 w-screen h-screen outline-double'>
      <div className="bg-white rounded-lg shadow-md p-4   h-5/6 ">
        <form onSubmit={handleSubmit}>
        <div className='p-6 text-2xl'>
            <input
              className="border placeholder-black border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
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
              className="border placeholder-black border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
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
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black"
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
             className="border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black"
          type="password"
          name='confirmpassword' 
          placeholder='confirm your password'
        value={information.confirmpassword}
  onChange={handleChange}
  required // Input is required
/>

          </div>
          <div className='p-6 text-2xl'>
            <label htmlFor="rememberMe" className="mr-2">Remember me</label>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={information.rememberMe}
              onChange={handleChange}
            />
          </div>
          <button className='p-6 text-2xl text-black hover:text-blue-600' type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
