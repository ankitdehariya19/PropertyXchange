import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., API calls, authentication, etc.
    console.log('Submitted with:', email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen -mt-48">
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-8 w-96 flex flex-col gap-y-4 ">
        <h1 className="font-bold text-2xl mb-6">Log In</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 mb-2 h-14 text-sm  text-gray-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 mb-2 h-14 text-sm  text-gray-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
        >
          Log In
        </button>
        <div className="text-center mt-4">
          {/* Use the Link component instead of the anchor tag */}
          <Link to="/ForgotPassword" className="text-blue-500 font-semibold">Forgot your password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
