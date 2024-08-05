import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimg from "../assets/image1.png";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Dummy authentication check (replace with real authentication logic)
    if (email === 'test@example.com' && password === 'password') {
      // Redirect to home page on successful login
      navigate('/home');
    } else {
      // Handle login failure (e.g., show an error message)
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex-1 flex items-center justify-center bg-white">
        <img
          src={loginimg}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin}>
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
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-0 focus:border-black hover:border-black hover:bg-gray-100 transition duration-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ background: 'linear-gradient(to right, #000000, #434343)' }}
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <a href="#" className="text-gray-700 text-sm">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
