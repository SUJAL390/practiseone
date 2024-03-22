import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Forget = () => {
    const[newPassword,setNewPassword]=useState({
        password:"",
        confirmpassword:""
    })
    const navigate=useNavigate()
    const handleClick=(link)=>{
        navigate(link)

    }
    const handleChange=(e)=>{
        setNewPassword((prevInformation)=>({
            ...prevInformation,
            [e.target.name]:e.target.value}


        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if password matches confirm password
        if (newPassword.password === newPassword.confirmpassword) {
            // Handle form submission here
            handleFormSubmission();
            // Reset password fields after submission
            setNewPassword({
                password: "",
                confirmpassword: ""
            });
        } else {
            alert("Passwords do not match");
            // Reset password fields after displaying alert
            setNewPassword({
                password: "",
                confirmpassword: ""
            });
        }
    };
    
    

    const handleFormSubmission = () => {
        console.log("Form Submitted");
        // Add your logic for form submission here
    };
    

  
  return (
    <div className='w-screen h-screen bg-blue-200  flex flex-col gap-10 justify-center items-center'>
        <form onSubmit={handleSubmit} className=' w-1/3 h-1/2 flex flex-col justify-center items-center gap-14 bg-white border shadow'>
            <div className=' '>
            <input type='password'
                 name='password' 
                 placeholder='enter a new password' 
                 value={newPassword.password}
                 onChange={handleChange}
                className='placeholder-gray-400 rounded shadow text-3xl'>
                </input>
            </div>
            <div>
                <input type='password'
                 name='confirmpassword' 
                 placeholder='confirm your  password' 
                 value={newPassword.confirmpassword}
                 onChange={handleChange}
                className='placeholder-gray-400 rounded shadow  text-3xl'>
                </input>
            </div>
            <div className=' flex justify-around gap-20'>
            <button className=' border ' onClick={handleSubmit}>Next</button>
                <button className='  border ' onClick={()=>handleClick("/")}>Back to Home</button>
            </div>
        </form>
    </div>
  )
}

export default Forget;