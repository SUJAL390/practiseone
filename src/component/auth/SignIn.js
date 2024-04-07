import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    showForgotPasswordModal: false,
    newPassword: '',
    confirmNewPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('thank you forsubmitting')

    // Clear form data
    setFormData({
      email: '',
      password: '',
      rememberMe: false,
      showForgotPasswordModal: false,
      newPassword: '',
      confirmNewPassword: '',
    });
  };

  const handleForgotPassword = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      showForgotPasswordModal: true,
    }));
  };

  const handleForgotPasswordClose = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      showForgotPasswordModal: false,
    }));
  };

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className='text-2xl flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-purple-500 to-pink-500  w-screen h-screen outline-double'>
      <div className="bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit}>
          <div className='p-10 text-2xl'>
            <input
              className="border w-5/6 placeholder-black border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              name='email'
              type="email"
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              required // Input is required
            />
          </div>
          <div className='p-10'>
            <input
              className="border w-5/6 border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black"
              type="password"
              name='password'
              placeholder='Enter your password'
              value={formData.password}
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
              checked={formData.rememberMe}
              onChange={handleChange}
            />
          </div>
          <div className='p-10'>
            <button onClick={handleForgotPassword} className='p-10 text-2xl text-black hover:text-blue-600' type="button">Forgot password?</button>
          </div>
          <button onClick={() => handleClick("/auth/signup")} className='p-10 text-2xl text-black hover:text-blue-600' type="button">New user ? SIGN up</button>
          <button onClick={() => handleClick("/")} className='p-10 text-2xl text-black hover:text-blue-600' type="button">Back to Home</button>
        </form>
      </div>

      {/* Forgot Password Modal */}
      {formData.showForgotPasswordModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500  rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            {formData.newPassword && formData.confirmNewPassword && formData.newPassword !== formData.confirmNewPassword && (
              <p className="text-red-500 mb-4">Passwords do not match</p>
            )}
            <p className="mb-4">Please enter your new password.</p>
            <form>
              <input
                type="password"
                className="border w-full border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black mb-4"
                placeholder="Enter new password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="border w-full border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 placeholder-black mb-4"
                placeholder="Confirm new password"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                required
              />
              <div className="flex justify-end">
                <button onClick={handleForgotPasswordClose} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Close</button>
                <button disabled={!formData.newPassword || formData.newPassword !== formData.confirmNewPassword} type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
