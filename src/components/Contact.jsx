import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import contactimg from "../assets/image1.png"; // Replace with your contact image

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy submission logic (replace with real submission logic)
    alert('Message sent successfully');
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex-1 flex items-center justify-center bg-white">
        <img
          src={contactimg}
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black hover:border-black hover:bg-gray-100 transition duration-300"
                placeholder="Enter your name"
              />
            </div>
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-mdfocus:outline-none focus:ring-0 focus:border-black hover:border-black hover:bg-gray-100 transition duration-300"
                placeholder="Enter your message"
                rows="4"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ background: 'linear-gradient(to right, #000000, #434343)' }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
