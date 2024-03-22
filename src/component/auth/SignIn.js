import React, { useState } from 'react';

const SignIn = () => {
  const [information, setInformation] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', information);
    
    // Clear email, password, and checkbox fields
    setInformation({
      email: '',
      password: '',
      rememberMe: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setInformation((prevInformation) => ({
      ...prevInformation,
      [name]: newValue,
    }));
  };

  return (
    <div className='text-2xl flex flex-col justify-center items-center bg-blue-400 w-screen h-screen outline-double'>
      <div className="bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit}>
          <div className='p-10 text-2xl'>
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
          <div className='p-10'>
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
          <div className="px-8 gap-2">
            <label htmlFor="rememberMe" className="mr-2">Remember me</label>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={information.rememberMe}
              onChange={handleChange}
            />
          </div>
          <button className='p-10 text-2xl text-black hover:text-blue-600' type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
