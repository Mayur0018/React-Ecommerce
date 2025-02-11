import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupimg from "../assets/image1.png"; // Replace with your signup image

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (password === confirmPassword) {
      // Dummy signup check (replace with real signup logic)
      // Redirect to home page or login page on successful signup
      navigate('/home');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex-1 flex items-center justify-center bg-white">
        <img
          src={signupimg}
          alt="Signup"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black hover:border-black hover:bg-gray-100 transition duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black hover:border-black hover:bg-gray-100 transition duration-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black hover:border-black hover:bg-gray-100 transition duration-300"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ background: 'linear-gradient(to right, #000000, #434343)' }}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <a href="/login" className="text-gray-700 text-sm">
                Already have an account? Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
