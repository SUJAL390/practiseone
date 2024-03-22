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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name='email'
                type="email"
                placeholder='Enter your email address'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button type="button" onClick={handleForgotPassword} className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <button onClick={() => handleClick("/auth/signup")} className="text-sm text-blue-500 hover:text-blue-700 mr-2">New user? Sign Up</button>
            <button onClick={() => handleClick("/")} className="text-sm text-blue-500 hover:text-blue-700">Back to Home</button>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {formData.showForgotPasswordModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            {formData.newPassword && formData.confirmNewPassword && formData.newPassword !== formData.confirmNewPassword && (
              <p className="text-red-500 mb-4">Passwords do not match</p>
            )}
            <p className="mb-4">Please enter your new password.</p>
            <form>
              <input
                type="password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter new password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
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
