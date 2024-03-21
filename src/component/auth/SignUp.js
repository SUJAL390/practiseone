import React from 'react'
import { useState } from 'react'

const SignUp = () => {
  const [information,setInformation ] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className='bg-blue-500 flex h-screen w-screen justify-center items-center '>
       <div className=" bg-white rounded-lg  ">
      <form>
        <div className="p-6 text-2xl">
          <input
            className="border placeholder-black border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            type="text"
            placeholder="enter your username"
            value={information.username}
            onChange={(e) => setInformation({...information,username: e.target.value})}
            required // Input is required
          />
        </div>
        <div className="p-6 text-2xl">
          <input
            className="border placeholder-black border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            type="email"
            placeholder="enter your email address"
            value={information.email}
            onChange={(e) => setInformation({...information,email: e.target.value})}
            required // Input is required
          />
        </div>
        <div className="p-6 text-2xl">
          <input
            className="border  border-black rounded-md text-2xl py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black"
            type="password"
            placeholder="enter your  password"
            value={information.password}
            onChange={(e) => setInformation({...information,password: e.target.value})}
            required // Input is required
          />
        </div>
        <div className="p-6 text-2xl ">
          <input
            className="border  border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black"
            type="password"
            placeholder="confirm your  password"
            value={information.confirmPassword}
            onChange={(e) => setInformation({...information,confirmPassword: e.target.value})}
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
        <button
          className="p-10  text-2xl text-black hover:text-blue-600"
          type="submit"
        >
          SIGN UP
        </button>
      </form>
      </div>
    </div>
  )
}

export default SignUp