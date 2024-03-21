import React, { useState } from 'react';


const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Submitted:', { email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <div className=' text-2xl flex flex-col justify-center items-center bg-blue-400 w-screen h-screen outline-double'>
      <div className=" bg-white rounded-lg shadow-md p-8">
     
    
    
      <form onSubmit={handleSubmit}>
        <div className='p-10 text-2xl'>
         
          <input
           className="border placeholder-black border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            type="email"
            placeholder='enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            required // Input is required
          />
        </div>
        <div className='p-10 '>
      
          <input
                     className="border  border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black"
            type="password"
            placeholder='enter your  password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Input is required
          />
        </div>
        <div className="px-8 gap-2">
          <span className="mr-2">Remember me</span>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            value="rememberMe"
            className="mr-2"
          />
        </div>
        <button className='p-10  text-2xl text-black hover:text-blue-600' type="submit">SIGN IN</button>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
