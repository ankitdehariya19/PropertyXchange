import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here, e.g., API calls, sending reset email, etc.
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="flex items-center justify-center h-screen -mt-48">
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-8 w-96 flex flex-col gap-y-4 -mt-48">
        <h1 className="font-bold text-2xl mb-6">Forgot Password</h1>
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
        <button
          type="submit"
          className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
        >
          Reset Password
        </button>
        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-500 font-semibold">Back to Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
